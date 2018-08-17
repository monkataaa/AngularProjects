import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CatalogComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
