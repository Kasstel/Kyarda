import { useEffect, useState } from "react";
import { useCart } from "../Cart/Context/Context";
import { useModal } from "../ModalContext/ModalContext";
import "./ProductCard.css"

export type typeBoard = "Сухая калиброванная 1-2 сорт" | "Сухая калиброванная 3 сорт" | "Обрезная (ест. вл) 2-3 сорт"


export interface IProductCard{
  name: string,
  image: string,
  salePrice?: number,
  firstPrice: number,
  typeBoard: typeBoard,
  thickness: string,
  width: string,
  description: string,
  priceDescription?:string,
  length?: string
}


const formatPrice = (price: number) => `${price.toLocaleString("ru-RU")} ₽`

export function ProductCard({ 
  name, 
  salePrice, 
  firstPrice, 
  typeBoard, 
  thickness, 
  width, 
  description,
  image,
  priceDescription,
  length
}: IProductCard){

  const { items, dispatch } = useCart();
  const { closeModal } = useModal();
  const [justAdded, setJustAdded] = useState(false);

  const price = salePrice ?? firstPrice;
  const discount = salePrice ? Math.round((1 - salePrice / firstPrice) * 100) : 0;
  const inCart = items.find((item) => item.name === name)?.quantity ?? 0;

  // В данных описание хранится одной строкой с переносами — показываем списком
  const descriptionLines = description.split("\n").map((line) => line.trim()).filter(Boolean);

  const specs = [
    { label: "Толщина", value: thickness },
    { label: "Ширина", value: width },
    // в данных длина записана вместе с подписью: «Длина 6 000 мм / 3 000 мм»
    ...(length ? [{ label: "Длина", value: length.replace(/^Длина\s*/i, "") }] : []),
  ];

  // Кнопка ненадолго подтверждает добавление
  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(false), 1500);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const addProduct = () => {
    dispatch({
      type: 'ADD',
      payload: { name, image, price, typeBoard, thickness, width}
    });
    setJustAdded(true);
  };

  return (
    <div className="product-modal">
      <button className="product-modal__close" type="button" aria-label="Закрыть" onClick={closeModal}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="product-modal__media">
        <img className="product-modal__image" src={image} alt={name} />
        {typeBoard && <span className="product-modal__badge">{typeBoard}</span>}
      </div>

      <div className="product-modal__body">
        <div>
          <h2 className="product-modal__title">{name}</h2>
          <p className="product-modal__subtitle">пиломатериал</p>
        </div>

        <ul className="product-modal__specs">
          {specs.map((spec) => (
            <li className="product-modal__spec" key={spec.label}>
              <span className="product-modal__spec-name">{spec.label}</span>
              <span className="product-modal__spec-value">{spec.value}</span>
            </li>
          ))}
        </ul>

        {descriptionLines.length > 0 && (
          <ul className="product-modal__description">
            {descriptionLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}

        <div className="product-modal__footer">
          <div className="product-modal__pricing">
            <div className="product-modal__price-row">
              <span className="product-modal__price">{formatPrice(price)}</span>
              {salePrice && (
                <>
                  <del className="product-modal__old-price">{formatPrice(firstPrice)}</del>
                  {discount > 0 && <span className="product-modal__discount">−{discount}%</span>}
                </>
              )}
            </div>
            {priceDescription && <p className="product-modal__price-note">{priceDescription}</p>}
          </div>

          <button className="product-modal__button" type="button" onClick={addProduct}>
            {justAdded ? "Добавлено ✓" : "Добавить в корзину"}
          </button>
          <p className="product-modal__in-cart" aria-live="polite">
            {inCart > 0 ? `В корзине: ${inCart} шт.` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
