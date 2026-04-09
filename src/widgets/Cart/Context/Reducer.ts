import type { CartAction, ICartState } from "../Cart.types";

const STORAGE_KEY="kyarda_cart"

export function loadCart(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch{
  }
  return {items: []}
}

function saveCart(state: ICartState): ICartState{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  return(state)
}

export function CartReducer (state: ICartState, action: CartAction):ICartState{
  switch(action.type){
    
    case('ADD'): {
      let existing = state.items.find((item)=> item.name === action.payload.name);
      if (existing) {
        return saveCart({
          items: state.items.map((item)=> {
            return item.name === action.payload.name ? {...item, quantity: item.quantity+1}:item
          }),
        });
      }
      return saveCart({
          items: [...state.items, {...action.payload, quantity:1}],
        })
      }
    case('DELETE'):{
      return saveCart({
        items: state.items.filter(item => item.name !== action.payload.name),
      });
    }

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return saveCart({ items: state.items.filter(i => i.name !== action.payload.name) });
      }
      return saveCart({
        items: state.items.map(i =>
          i.name === action.payload.name
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      });

    case 'CLEAR_CART':
      return saveCart({items: []})
    
    default:
      return state;
  }     
}