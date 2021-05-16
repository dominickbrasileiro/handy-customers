import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService, OrderWithItems } from 'src/app/services/orders.service';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
  ) {}

  order: OrderWithItems;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const orderId = routeParams.get('orderId');

    this.ordersService.getOrderDetails(Number(orderId)).subscribe(result => {
      this.order = result;
    });
  }
}
