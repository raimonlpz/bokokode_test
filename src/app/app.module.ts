import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptors';
import { ProductComponent } from './components/product/product.component';
import { GridComponent } from './components/grid/grid.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';

import { CategoriesComponent } from './components/categories/categories.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';


import { StoreModule } from '@ngrx/store';
import { CartReducer } from './store/cart.reducer';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedComponent,
    ProductComponent,
    GridComponent,
    CategoriesComponent,
    PaginatorComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      cart: CartReducer
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
