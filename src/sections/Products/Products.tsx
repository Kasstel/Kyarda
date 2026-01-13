import '../../App.css'
import { PRODUCTS } from '../../assets/data/products'
import { ProductCardPreview } from '../../widgets/ProductCard/ProductCardPreview'
import './Products.css'

export default function Products(){
  return(
    <>
      <section id="products" className="products">
          <h2 className='products__section-title'>Ходовые Товары</h2>
          {PRODUCTS.map((product) => (
          <ProductCardPreview key={product.name} {...product} />
          ))}
      </section>
    </>
  )
}