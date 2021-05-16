import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent {
  constructor(
    private customersService: CustomersService,
    private ordersService: OrdersService,
    private router: Router,
    private location: Location,
  ) {}

  customerId: number;
  items = [];

  customers = this.customersService.getActiveCustomers();

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.ordersService.addOrder({
      customerId: this.customerId,
      items: this.items,
    }).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
