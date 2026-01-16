import '../../App.css'

export default function Experience(){
  return(
    <section className="experience__section">
            <h2 className="experience-title section-title main-title">Почему именно мы?</h2>
            <div className="experience-card__container">
              <article className='experience-card'>
              <div className="ecology experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Экологическая</h3>
                  <h3 className="another__experience-text experience-card__title">безопасность</h3>                  
                </div>
                <p className="experience-card__paragraph">Мы придерживаемся строгих экологических норм и используем переработанные материалы, чтобы снизить негативное воздействие на окружающую среду.</p>
              </div>
            </article>
            <article className='experience-card'>
              <div className="quality experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Высокое</h3>
                  <h3 className="uniqie__experience-text experience-card__title">качество</h3>
                </div>
                <p className="experience-card__paragraph">Мы используем современные технологии и лучшее оборудование, что гарантирует высокие эксплуатационные характеристики нашей продукции.
                </p>
              </div>
            </article>
            <article className='experience-card'>
              <div className="professional experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Профессионализм</h3>
                </div>
                  <p className="experience-card__paragraph">В нашей команде работают опытные специалисты, готовые предоставить компетентную помощь в выборе и покупке пиломатериалов.
                </p>
              </div>     
            </article>
            <article className='experience-card'>
              <div className="individual experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Индивидуальный</h3>
                  <h3 className="another__experience-text experience-card__title">подход</h3>
                </div>
                <p className="experience-card__paragraph">Мы предлагаем гибкие условия сотрудничества и готовы выполнять заказы любой сложности, учитывая потребности наших клиентов.
                </p>
              </div>    
            </article>
            </div>
            
    </section>
  )
}