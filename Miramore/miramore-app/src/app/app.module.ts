import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { OrderProductsComponent } from './orders/order-products/order-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CatalogComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    OrderProductsComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
