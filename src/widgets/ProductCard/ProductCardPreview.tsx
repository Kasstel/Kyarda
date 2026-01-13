import { useModal } from "../ModalContext/ModalContext"
import type { IProductCard } from "./ProductCard"
import '../../sections/Products/Products.css'
import '../../App.css'

export function ProductCardPreview(product:IProductCard){

  const {openModal} = useModal()

  return(
      <button className='products__card-button' onClick={()=>{openModal('product', product)}}>
            <article className='products__card'>
              <div className="background" style={{backgroundImage: `url(${product.image})`}}>
              </div>
              <div className="products__card__content-block">
                  <p className="products__card-paragraph">{product.description}</p>
                  <div className="price-block">
                    <p className='sale'>{product.salePrice} ₽</p>
                    <del><p className='products__card-price'>{product.firstPrice} ₽</p></del>
                  </div>
              </div>
            </article>
            <div className="products__card__title-block">
                  <h3 className="products__card-title">{product.name}</h3>
                  <h3 className="another__experience-text products__card-title">пиломатериал</h3>                  
              </div>
          </button>
  )
}