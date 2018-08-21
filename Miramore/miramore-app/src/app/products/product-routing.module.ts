import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminGuard } from './admin.guard';

const routes : Route [] = [
    {   path : "details/:id", component : ProductDetailsComponent,  } ,
   {   path : "create", component : ProductCreateComponent, canActivate: [AdminGuard] }, 
   {   path : "edit/:id", component : ProductEditComponent, canActivate: [AdminGuard] } ,
   {   path : "list", component : ProductListComponent } ,
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ProductRoutingModule {}