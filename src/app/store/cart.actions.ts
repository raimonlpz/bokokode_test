import { Action } from '@ngrx/store';
import { Product } from '../models/interfaces';


export enum CartActionType {
    ADD_PRODUCT = '[PRODUCT] Add PRODUCT',
    REM_PRODUCT = '[PRODUCT] Remove PRODUCT',
    REM_ALL_PRODUCTS = '[PRODUCT] Remove All PRODUCT'
}


export class AddProductAction implements ActionWithPayload<Product> {
  readonly type = CartActionType.ADD_PRODUCT;
  payload: Product;

  constructor(payload: Product) {
    this.payload = payload;
  }
}

export class RemoveProductAction implements ActionWithPayload<string> {
  readonly type = CartActionType.REM_PRODUCT;
  payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }
}


export class RemoveAllProductsAction {
  readonly type = CartActionType.REM_ALL_PRODUCTS;
}




export default interface ActionWithPayload<T> extends Action {
  payload: T;
}





export type CartAction =
    | AddProductAction
    | RemoveProductAction
    | RemoveAllProductsAction
