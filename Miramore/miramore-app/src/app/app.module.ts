import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    ProductModule,
    OrderModule
    
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
