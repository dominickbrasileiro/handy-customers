import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from './customers.service';

export interface Order {
  id: number;
  amount: number;
  created_at: string;
  customer: Customer;
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderWithItems extends Order {
  order_items: OrderItem[];
}

export interface AddOrderDto {
  customerId: number;
  items: Array<{
    product_id: number;
    quantity: number;
  }>
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private http: HttpClient,
  ) {}
  
  getOrders() {
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/orders`);
  }

  getOrderDetails(id: number) {
    return this.http.get<OrderWithItems>(`${environment.apiBaseUrl}/orders/${id}`);
  }

  addOrder(orderData: AddOrderDto) {
    const { customerId, items } = orderData;
    return this.http.post(`${environment.apiBaseUrl}/customers/${customerId}/orders`, { items });
  }
}
