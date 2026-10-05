import { useCart } from "./Context/Context"
import './Cart.css'
import type { ICartItem } from "./Cart.types";
import { useModal } from "../ModalContext/ModalContext";

const formatPrice = (price: number) => `${price.toLocaleString("ru-RU")} ₽`

// 1 товар, 2 товара, 5 товаров
function pluralizeItems(count: number) {
  const lastTwo = count % 100
  const last = count % 10
  if (lastTwo >= 11 && lastTwo <= 14) return `${count} товаров`
  if (last === 1) return `${count} товар`
  if (last >= 2 && last <= 4) return `${count} товара`
  return `${count} товаров`
}

export function Cart(){
  const {openModal, closeModal} = useModal();
  const {items, totalItems, totalPrice, dispatch} = useCart();
  const removeCart = ()=>{
    dispatch({
    type: 'CLEAR_CART'
  })
  }

  const decQuantity = (item:ICartItem)=>{
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        name: item.name,
        quantity: item.quantity-1
      }
    })
  }

  const incQuantity = (item:ICartItem)=>{
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        name: item.name,
        quantity: item.quantity+1
      }
    })
  }

  const removeItem = (item:ICartItem)=>{
    dispatch({
      type: 'DELETE',
      payload: { name: item.name }
    })
  }

  const isEmpty = items.length === 0

  return(
    <div className="cart">
      <button className="cart__close" type="button" aria-label="Закрыть" onClick={closeModal}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="cart__header-block">
        <h2 className="cart__header">Корзина</h2>
        {!isEmpty && <span className="cart__count">{pluralizeItems(totalItems)}</span>}
      </div>

      {isEmpty ? (
        <div className="cart__empty">
          <p className="cart__empty-title">В корзине пока пусто</p>
          <p className="cart__empty-text">Выберите пиломатериалы в разделе «Ходовые товары»</p>
          <button className="cart__submit" type="button" onClick={closeModal}>Вернуться к товарам</button>
        </div>
      ) : (
        <>
          <ul className="cart__list">
            {items.map((item)=> (
              <li className="cart__item" key={item.name}>
                <img className="cart__item-image" src={item.image} alt={item.name}/>

                <div className="cart__item-info">
                  <div className="cart__item-top">
                    <div>
                      <p className="cart__item-name">{item.name}</p>
                      <p className="cart__item-subtitle">пиломатериал · {item.width} × {item.thickness}</p>
                    </div>
                    <button className="cart__remove" type="button" aria-label={`Удалить «${item.name}» из корзины`} onClick={()=>{removeItem(item)}}>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20.5001 6H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M9.5 11L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14.5 11L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  <span className="cart__item-badge">{item.typeBoard}</span>

                  <div className="cart__item-bottom">
                    <div className="cart__quantity">
                      <button className="cart__quantity-button" type="button" aria-label="Уменьшить количество" onClick={()=>{decQuantity(item)}}>−</button>
                      <span className="cart__quantity-value">{item.quantity}</span>
                      <button className="cart__quantity-button" type="button" aria-label="Увеличить количество" onClick={()=>{incQuantity(item)}}>+</button>
                    </div>

                    <div className="cart__item-prices">
                      <p className="cart__item-total">{formatPrice(item.price * item.quantity)}</p>
                      {item.quantity > 1 && (
                        <p className="cart__item-unit">{formatPrice(item.price)} × {item.quantity}</p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart__footer">
            <div className="cart__summary">
              <span className="cart__summary-label">Итого</span>
              <span className="cart__summary-price">{formatPrice(totalPrice)}</span>
            </div>
            <button className="cart__submit" type="button" onClick={()=>{openModal('order')}}>Оформить заказ</button>
            <button className="cart__clear" type="button" onClick={removeCart}>Очистить корзину</button>
          </div>
        </>
      )}
    </div>
  )

}
