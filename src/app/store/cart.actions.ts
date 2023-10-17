import { props, createAction } from '@ngrx/store';
import { Product } from '../models/interfaces';


export enum CartActionType {
    ADD_PRODUCT = '[PRODUCT] Add PRODUCT',
    REM_PRODUCT = '[PRODUCT] Remove PRODUCT'
}


export const AddProductAction = createAction(
    CartActionType.ADD_PRODUCT,
    props<{payload: Array<Product>}>
)

export const RemoveProductAction = createAction(
    CartActionType.REM_PRODUCT,
    props<{payload: Array<Product>}>
)



export type CartAction = 
    | typeof AddProductAction
    | typeof RemoveProductAction
