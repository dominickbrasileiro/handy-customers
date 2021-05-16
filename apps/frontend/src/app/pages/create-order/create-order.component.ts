import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Customer, CustomersService } from 'src/app/services/customers.service';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  products: Product[];
  customers: Customer[];
  createOrderForm: FormGroup;

  constructor(
    private customersService: CustomersService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.productsService.getActiveProducts().subscribe(products => {
      this.products = products;
    });

    this.customersService.getActiveCustomers().subscribe(customers => {
      this.customers = customers;
    });

    this.createOrderForm = this.formBuilder.group({
      customerId: 1,
      items: this.formBuilder.array([
        this.createItemFormGroup(),
      ]),
    })
  }

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

  get subtotal() {
    const { items } = this.createOrderForm.value;

    return items.reduce((acc: number, item: any) => {
      if (!this.products) {
        return 0;
      }

      const product = this.products.find(prod => prod.id === Number(item.product_id))
      
      if (product) {
        return acc + (product.price * item.quantity);
      }

      return acc;
    }, 0);
  }

  getProductPriceByItemIndex(index: number) {
    if (!this.products) {
      return 0;
    }

    const { items } = this.createOrderForm.value;

    const productId = Number(items[index].product_id)
    const product = this.products.find(prod => prod.id === productId);

    return product?.price || 0;
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.createOrderForm.value);
  }
}
