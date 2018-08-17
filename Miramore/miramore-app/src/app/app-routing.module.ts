import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AuthGuard } from './auth/auth.guard';
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
   {   path : "details/:id", component : ProductDetailsComponent } 
  ],
   canActivate: [AuthGuard] 
  }, 
  {
    path: '**', redirectTo: '/catalog'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }