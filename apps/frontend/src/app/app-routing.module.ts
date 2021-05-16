import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
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
  {
    path: 'orders',
    component: OrdersComponent,    
  },
  {
    path: 'orders/new',
    component: CreateOrderComponent,    
  },
  {
    path: 'orders/:orderId',
    component: OrderDetailsComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
