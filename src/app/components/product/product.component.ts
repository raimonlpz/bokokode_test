import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { CartActionType } from 'src/app/store/cart.actions';
import { CartState } from 'src/app/store/state.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Product | undefined;
  @Input() isRelated!: boolean;

  // private productsSub: Subscription;

  products!: Product[];

  constructor(private store: Store<CartState>) {
    this.store
      .select(state => state.cart)
      .subscribe(cart => this.products = cart)
  }

  addToCart(product: Product): void {
    console.log(product)
    this.store.dispatch({
      type: CartActionType.ADD_PRODUCT,
      payload: {
        cart: [
          ...this.products,
          product
        ]
      }
    });
  }

}
