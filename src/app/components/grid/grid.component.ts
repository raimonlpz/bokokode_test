import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/interfaces';
import { PaginatorComponent } from '../paginator/paginator.component';
import { Category, OrderKey, OrderType } from 'src/app/models/types';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public openModalCategoriesMobile = false;

  private categoriesSelected: Array<Category> = [];
  private orderSelected: { key: OrderKey, type: OrderType } = { key: 'price', type: 'ASC' };

  @Input() products: Array<Product> = [];
  @Input() totalProducts: number = 0;

  @Output() searchProducts = new EventEmitter<{
    order: { key: OrderKey, type: OrderType }
    categories: Array<Category>,
    page: number,
  }>();

  @ViewChild('paginator') paginator!: PaginatorComponent;

  ngOnInit(): void {}


  searchByCategories(categories: Array<Category>): void {
    this.paginator.firstPage();
    this.categoriesSelected = categories;
    this.searchProducts.emit({
      order: this.orderSelected,
      categories,
      page: 1
    });
  }

  searchByPage(page: number): void {
    this.searchProducts.emit({
      categories: this.categoriesSelected,
      order: this.orderSelected,
      page
    })
  }

  searchByOrder(order: { key: OrderKey, type: OrderType }): void {
    this.paginator.firstPage();
    this.orderSelected = order;
    this.searchProducts.emit({
      categories: this.categoriesSelected,
      page: 1,
      order
    })
  }


  openFilterByCategoriesModal(): void {
    console.log('hola?')
    this.openModalCategoriesMobile = true;
  }

  closeFilterByCategoriesModal(): void {
    this.openModalCategoriesMobile = false;
  }
}
