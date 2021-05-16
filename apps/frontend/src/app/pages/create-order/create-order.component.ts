import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent {
  constructor(
    private customersService: CustomersService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {}

  createOrderForm = this.formBuilder.group({
    customerId: 1,
    items: this.formBuilder.array([
      this.createItemFormGroup(),
    ]),
  })

  customers = this.customersService.getActiveCustomers();
  products = this.productsService.getActiveProducts();

  get items() {
    return this.createOrderForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.createItemFormGroup());
  }

  createItemFormGroup() {
    return this.formBuilder.group({
      product_id: 1,
      quantity: 1,
    });
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.createOrderForm.value);
  }
}
