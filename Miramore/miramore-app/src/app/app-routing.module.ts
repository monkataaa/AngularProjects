import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { AuthGuard } from './auth/auth.guard';
import { OrderProductsComponent } from './orders/order-products/order-products.component';
import { AdminGuard } from './products/admin.guard';
import { ProductModule } from './products/product.module';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]  },
  {
    path: 'catalog', component : CatalogComponent
  },
  { path: 'product', loadChildren: ()=> ProductModule, 
     canActivate: [AuthGuard] 
  }, 
  { path: 'orders', children: [
    {path: 'myOrder', component : OrderProductsComponent}
  ]},
  {
    path: '**', redirectTo: '/auth/login'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }