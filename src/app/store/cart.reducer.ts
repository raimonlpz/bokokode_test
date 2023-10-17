import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/interfaces";
import { AddProductAction, RemoveProductAction } from "./cart.actions";


const initialState: Array<Product> = [ ];


export const cartReducer = createReducer(
    initialState,
    on(AddProductAction, (state, action) => {
        return [...state, (action as any).payload]
    }),
    on(RemoveProductAction, (state, action) => {
        return [...state, (action as any).payload]
    }),
);
