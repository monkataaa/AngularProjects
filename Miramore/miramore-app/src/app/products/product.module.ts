import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
    declarations : [
        ProductCreateComponent,
        ProductEditComponent,
        ProductDetailsComponent,
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule        
    ]
})

export class ProductModule {}