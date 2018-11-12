import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'purchase', component: PurchaseOrderComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes) 
  ],
  exports:[RouterModule],

  declarations: []
})

export class AppRoutingModule { }
