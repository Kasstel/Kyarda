import type { typeBoard } from "../ProductCard/ProductCard";

export interface ICartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
  typeBoard: typeBoard;
  thickness: string,
  width: string
}

export interface ICartState{
  items: ICartItem[]
}

export type CartAction = | {type: 'ADD'; payload: { name: string; image: string; price: number; typeBoard: typeBoard; thickness: string,
width: string}} | {type: 'DELETE'; payload: {name:string}} | {type: "UPDATE_QUANTITY", payload: { name: string; quantity: number; }}| {type: 'CLEAR_CART'}
