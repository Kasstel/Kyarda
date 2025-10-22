import '../../App.css'
import './Products.css'

export default function Products(){
  return(
    <>
      <section className="products">
          <h2 className='products__section-title'>Ходовые Товары</h2>
          <button className='products__card-button'>
            <article className='products__card'>
              <div className="kalibr__pilo background">
              </div>
              <div className="products__card__content-block">
                  <p className="products__card-paragraph">Мы придерживаемся строгих экологических норм и используем переработанные материалы, чтобы снизить негативное воздействие на окружающую среду.</p>
                  <div className="price-block">
                    <p className='sale'>2990 rub</p>
                    <del><p className='products__card-price'>5000 rub</p></del>
                  </div>
              </div>
            </article>
            <div className="products__card__title-block">
                  <h3 className="products__card-title">Калиброванный</h3>
                  <h3 className="another__experience-text products__card-title">пиломатериал</h3>                  
              </div>
          </button>
          <button className='products__card-button'>
            <article className='products__card'>
              <div className="strog__pilo background">
              </div>
              <div className="products__card__content-block">
                  <p className="products__card-paragraph">Мы придерживаемся строгих экологических норм и используем переработанные материалы, чтобы снизить негативное воздействие на окружающую среду.</p>
                  <div className="price-block">
                    <p className='sale'>2990 rub</p>
                    <del><p className='products__card-price'>5000 rub</p></del>
                  </div>
              </div>
            </article>
            <div className="products__card__title-block">
                  <h3 className="products__card-title">Калиброванный</h3>
                  <h3 className="another__experience-text products__card-title">пиломатериал</h3>                  
              </div>
          </button>
          <button className='products__card-button'>
            <article className='products__card'>
              <div className="prof__pilo background">
              </div>
              <div className="products__card__content-block">
                  <p className="products__card-paragraph">Мы придерживаемся строгих экологических норм и используем переработанные материалы, чтобы снизить негативное воздействие на окружающую среду.</p>
                  <div className="price-block">
                    <p className='sale'>2990 rub</p>
                    <del><p className='products__card-price'>5000 rub</p></del>
                  </div>
              </div>
            </article>
            <div className="products__card__title-block">
                  <h3 className="products__card-title">Калиброванный</h3>
                  <h3 className="another__experience-text products__card-title">пиломатериал</h3>                  
              </div>
          </button>
      </section>
    </>
  )
}