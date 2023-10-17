import { Action } from "@ngrx/store";
import { Product } from "../models/interfaces";
import ActionWithPayload, { CartActionType } from "./cart.actions";
import { CartState } from "./state.model";


const initialState: { cart: Array<Product> } = {
  cart: []
};


export function CartReducer(
  state: CartState = initialState,
  action: Action
) {

  switch (action.type) {
    case CartActionType.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, (action as ActionWithPayload<Product>).payload]
      }
    case CartActionType.REM_PRODUCT:
      return { ...state }
    default:
      return state;
  }

}
