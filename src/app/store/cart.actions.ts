import { Action } from '@ngrx/store';
import { Product } from '../models/interfaces';


export enum CartActionType {
    ADD_PRODUCT = '[PRODUCT] Add PRODUCT',
    REM_PRODUCT = '[PRODUCT] Remove PRODUCT'
}


export class AddProductAction implements ActionWithPayload<Product> {
  readonly type = CartActionType.ADD_PRODUCT;
  payload: Product;

  constructor(payload: Product) {
    this.payload = payload;
  }
}

export class RemoveProductAction implements ActionWithPayload<Product> {
  readonly type = CartActionType.ADD_PRODUCT;
  payload: Product;

  constructor(payload: Product) {
    this.payload = payload;
  }
}




export default interface ActionWithPayload<T> extends Action {
  payload: T;
}





export type CartAction =
    | AddProductAction
    | RemoveProductAction
