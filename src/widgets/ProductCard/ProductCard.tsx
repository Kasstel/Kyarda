import { useCart } from "../Cart/Context/Context";
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

 const { dispatch } = useCart();

 let price: number;
  const addProduct = () => {
    if (salePrice){
      price = salePrice
    }
    else{price = firstPrice}
  dispatch({
    type: 'ADD',
    payload: { name, image, price, typeBoard, thickness, width}
  });
};
  return (
    <div className="product-modal">
        <div className="productBlock">
          <div className="product-info">
            <h2>{name}</h2>
            <div className="product-info__block">
            
            {typeBoard && <p>Тип: {typeBoard}</p>}

            <p>Толщина: {thickness}</p>
            <p>Ширина: {width}</p>
            <p>{length}</p>
            <p>{description}</p>
            
            <div className="pricing-block">
              <span>Цена: <span className="price">{salePrice} </span>₽</span>
              <p>Старая цена: <span className="old-price">{firstPrice} </span>₽</p>
              <p className="price-description">{priceDescription}</p>
            </div>
           
            </div>
          
          </div>
          <img className="productCard-image" src={image} alt={name} />

      </div>

      <button className="form_button" onClick={addProduct}>Добавить в корзину</button>
    </div>
  );
}
