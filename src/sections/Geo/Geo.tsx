
import './Geo.css'

export default function Geo(){
  return(
    <>
      <section className="geo">
          <h3 className='geo_title'>Где нас найти</h3>
          <iframe className='geo__map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A33b31a1c2a7acca19bcd587b5450728c96d482979694f1a782b26c63e1f6c937&amp;source=constructor" width="482" height="349" frameBorder="0"></iframe>
          <div className="geo__text-block">
            <p className='geo_text'>Наше современное предприятие расположено у реки Кьярда</p>
            <p className='geo_text'>в самом сердце Русского Севера - Вологодской области (Бабаевский район, д. Тимошино)</p>
          </div>    
      </section>
          
    </>
  )
}