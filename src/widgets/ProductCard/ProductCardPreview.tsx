import { useModal } from "../ModalContext/ModalContext"
import type { IProductCard } from "./ProductCard"
import '../../sections/Products/Products.css'
import '../../App.css'

const formatPrice = (price: number) => `${price.toLocaleString("ru-RU")} ₽`

export function ProductCardPreview(product:IProductCard){

  const {openModal} = useModal()

  const price = product.salePrice ?? product.firstPrice

  return(
      <button className='products__card-button' onClick={()=>{openModal('product', product)}}>
            <article className='products__card'>
              <div className="products__card-media">
                <img className="products__card-image" src={product.image} alt={product.name} loading="lazy" />
                <span className="products__card-badge">{product.typeBoard}</span>
              </div>
              <div className="products__card-body">
                <div className="products__card__title-block">
                  <h3 className="products__card-title">{product.name}</h3>
                  <p className="products__card-subtitle">пиломатериал</p>
                </div>
                <ul className="products__card-specs">
                  <li className="products__card-spec">
                    <span className="products__card-spec-name">Толщина</span>
                    <span>{product.thickness}</span>
                  </li>
                  <li className="products__card-spec">
                    <span className="products__card-spec-name">Ширина</span>
                    <span>{product.width}</span>
                  </li>
                </ul>
                <div className="products__card-footer">
                  <div className="products__card-prices">
                    <p className='products__card-sale'>
                      {formatPrice(price)}
                      {product.priceDescription && <span className="products__card-unit"> / м³</span>}
                    </p>
                    {product.salePrice && (
                      <del className='products__card-price'>{formatPrice(product.firstPrice)}</del>
                    )}
                  </div>
                  <span className="products__card-more">Подробнее</span>
                </div>
              </div>
            </article>
          </button>
  )
}
