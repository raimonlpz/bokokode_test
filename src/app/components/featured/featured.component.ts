import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/interfaces';
import { CartActionType } from 'src/app/store/cart.actions';
import { CartState } from 'src/app/store/state.model';


@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {

  @Input() featuredProduct!: Product | undefined;

  constructor(private store: Store<CartState>) {}


  addToCart(): void {

    this.store.dispatch({
      type: CartActionType.ADD_PRODUCT,
      payload: this.featuredProduct
    });
  }

}
