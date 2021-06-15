import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
const routes: Routes = [
  {
    path: 'add',
    component: AddOrderComponent,
  },
  {
    path: 'confirm',
    component: ConfirmOrderComponent,
  },
  {
    path: 'delete',
    component: DeleteOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
