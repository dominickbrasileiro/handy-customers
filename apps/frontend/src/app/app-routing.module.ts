import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,    
  },
  {
    path: 'customers/new',
    component: CreateCustomerComponent,    
  },
  {
    path: 'products',
    component: ProductsComponent,    
  },
  {
    path: 'products/new',
    component: CreateProductComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
