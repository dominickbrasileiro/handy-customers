import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  price: string;
  quantity: number;
}

export interface OrderWithItems extends Order {
  order_items: OrderItem[];
}

export interface AddOrderDto {
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
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  getOrderDetails(id: number) {
    return this.http.get<Order[]>(`http://localhost:3000/orders/${id}`);
  }

  addOrder(orderData: AddOrderDto) {
    return this.http.post('http://localhost:3000/orders', orderData);
  }
}
