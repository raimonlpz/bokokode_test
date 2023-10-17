import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIResponse, Product } from 'src/app/models/interfaces';
import { Category, OrderKey, OrderType } from 'src/app/models/types';
import { HttpService } from 'src/app/services/http.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public products: Array<Product> = [];
  public totalProducts = 0;
  public featuredProduct!: Product | undefined;

  private productsSub!: Subscription;


  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getProducts({
      categories: [],
      page: 1
    })
  }

  searchProductsWithParams({
      categories,
      order,
      page
  }: {
    categories: Array<Category>,
    order?: { key: OrderKey, type: OrderType },
    page: number
  }) {
    this.getProducts({ categories, page, order });
  }

  
  getProducts({ categories, page, order } : {
      categories: Array<Category>,
      order?: { key: OrderKey, type: OrderType },
      page: number
    }
  ): void {

    if (this.productsSub) {
      this.productsSub.unsubscribe();
    }


    this.productsSub = this.httpService
      .getProducts({ categories, page, order })
      .subscribe((products: APIResponse<Product>) => {
        if (products && products.data) {

          this.products = products.data.data;
          this.totalProducts = products.data.total;

          if (!this.featuredProduct) {
            this.featuredProduct = this.products.find(p => p.featured);
          }
          
        }
      });
  }


  ngOnDestroy(): void {
    if (this.productsSub) {
      this.productsSub.unsubscribe();
    }
  }
}
