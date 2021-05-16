import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  constructor(
    private ordersService: OrdersService,
  ) {}

  orders = this.ordersService.getOrders();
}
