import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('cart') cart!: CartComponent;

  constructor(public dialog: MatDialog) {}

  openCartModal(): void {
    this.cart.onOpenModal();
  }


}
