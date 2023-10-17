import { Component, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { CartActionType } from 'src/app/store/cart.actions';
import { CartState } from 'src/app/store/state.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  private cartState$!: Observable<CartState>;
  private cartSub!: Subscription;

  products!: Product[];

  @ViewChild('modal') modal!: ElementRef;

  constructor(private store: Store<CartState>) {}

  ngOnInit(): void {
    this.cartState$ = this.store.pipe(select('cart' as any));
    this.cartSub = this.cartState$
      .pipe(map(state => {
        this.products = state.cart
        if (this.products.length) {
          this.onOpenModal()
        }
      }))
      .subscribe();

  }


  onClearProducts(): void {
    this.store.dispatch({
      type: CartActionType.REM_ALL_PRODUCTS
    })
  }

  onCloseModal(): void {
    this.modal.nativeElement.style.display = 'none';
  }

  onOpenModal(): void {
    this.modal.nativeElement.style.display = 'block';
  }



  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }

}
