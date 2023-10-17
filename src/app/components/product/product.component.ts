import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
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

  products!: Product[];

  constructor(private store: Store<CartState>) {
  }

  addToCart(product: Product): void {
    this.store.dispatch({
      type: CartActionType.ADD_PRODUCT,
      payload: product
    });
  }


}
