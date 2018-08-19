import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { OrderProductsComponent } from './orders/order-products/order-products.component';
// import { AuthGuard } from './auth/auth.guard';
// import { RecipeModule } from './recipe/recipe.module';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]  },
  {
    path: 'catalog', component : CatalogComponent
  },
  { path: 'product', children: [
   {   path : "details/:id", component : ProductDetailsComponent } ,
   {   path : "create", component : ProductCreateComponent } ,
   {   path : "edit/:id", component : ProductEditComponent } ,
   {   path : "list", component : ProductListComponent } ,
  ], 
     canActivate: [AuthGuard] 
  }, 
  { path: 'orders', children: [
    {path: 'myOrder', component : OrderProductsComponent}
  ]},
  {
    path: '**', redirectTo: '/catalog'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }