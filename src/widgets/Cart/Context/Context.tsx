import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CartAction, ICartItem} from "../Cart.types";
import { CartReducer, loadCart } from "./Reducer";



interface CartContextValue{
  items: ICartItem[],
  totalItems: number,
  totalPrice: number
  dispatch: React.Dispatch<CartAction>;
}


export const CartContext = createContext<CartContextValue|null>(null)


export function CartProvider({children}: {children: ReactNode}){
  const [state, dispatch] = useReducer(CartReducer, undefined, loadCart)

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items: state.items, totalItems, totalPrice, dispatch }}>
      {children}
    </CartContext.Provider>
  );

}


export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}