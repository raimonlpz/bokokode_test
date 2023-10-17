import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { APIResponse, Product } from '../models/interfaces';
import { OrderKey, OrderType } from '../models/types';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts({ categories, page, order }: {
    categories: Array<string>,
    order?: { key: OrderKey, type: OrderType },
    page: number
  }): Observable<APIResponse<Product>> {

    let requestBody = {}
    let params = new HttpParams()
      .set('page', page)
      
    if (categories.length) {
      requestBody = { categories }
    }

    if (order) {
      requestBody = {
        ...requestBody,
        sort: {
          key: order.key,
          type: order.type
        }
      }
    }

    return this.http.post<APIResponse<Product>>(`${env.BASE_URL}/products`, requestBody, {
      params
    });
  }


  getProductById(): void {}

}
