import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,    
  },
  {
    path: 'customers/new',
    component: CreateCustomerComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
