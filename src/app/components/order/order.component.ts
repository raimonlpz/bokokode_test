import { Component, EventEmitter, Output } from '@angular/core';
import { OrderKey, OrderType } from 'src/app/models/types';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orderList: OrderKey[] = ['price', 'name'];

  private orderType: OrderType = 'ASC';
  private orderKey: OrderKey = 'price';

  @Output() applyOrder = new EventEmitter<{ key: OrderKey, type: OrderType }>();

  changeOrderKey(opt: any): void {
    this.orderKey = opt.target.value;
    this.applyOrder.emit({ key: this.orderKey, type: this.orderType });
  }

  changeOrderType(): void {
    this.orderType = this.orderType == 'ASC' ? 'DESC' : 'ASC';
    this.applyOrder.emit({ key: this.orderKey, type: this.orderType });
  }

}
