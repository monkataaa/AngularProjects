import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderProductsComponent } from './order-products/order-products.component';


@NgModule({
    declarations : [
        OrderProductsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
        
    ]
})


export class OrderModule {}