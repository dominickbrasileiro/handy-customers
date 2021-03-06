import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer, CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  products: Product[];
  customers: Customer[];
  createOrderForm: FormGroup;
  selectedProducts: { [key: number]: string } = {};

  constructor(
    private customersService: CustomersService,
    private productsService: ProductsService,
    private ordersService: OrdersService,
    private formBuilder: FormBuilder,
    private router: Router,
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

  removeItem(index: number) {
    delete this.selectedProducts[index];
  
    // Decreases the selected products index by one when a lower index is deleted
    Object.keys(this.selectedProducts).forEach((key) => {
      const numKey = Number(key);

      if (numKey >= index) {
        this.selectedProducts[numKey - 1] = this.selectedProducts[numKey];
        delete this.selectedProducts[numKey];
      }
    })

    this.items.removeAt(index);
  }

  createItemFormGroup() {
    return this.formBuilder.group({
      productId: '',
      quantity: 1,
    });
  }

  selectProduct(inputIndex: number, productId: string) {
    this.selectedProducts[inputIndex] = productId;;
  }

  getUnselectedProducts(inputIndex: number) {
    if (!this.products) {
      return [];
    }

    return this.products.filter(product => {
      if (this.selectedProducts[inputIndex] === `${product.id}`) {
        return true;
      }

      if (Object.values(this.selectedProducts).includes(`${product.id}`)) {
        return false;
      }

      return true;
    })
  }

  get subtotal() {
    const { items } = this.createOrderForm.value;

    return items.reduce((acc: number, item: any) => {
      if (!this.products) {
        return 0;
      }

      const product = this.products.find(prod => prod.id === Number(item.productId))
      
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

    const productId = Number(items[index].productId)
    const product = this.products.find(prod => prod.id === productId);

    return product?.price || 0;
  }

  getProductTotalByItemIndex(index: number) {
    if (!this.products) {
      return 0;
    }

    const { items } = this.createOrderForm.value;

    const productId = Number(items[index].productId)
    const product = this.products.find(prod => prod.id === productId);

    if (!product) {
      return 0;
    }

    return product.price * items[index].quantity;
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    const { customerId, items } = this.createOrderForm.value;

    const mappedItems = items.map((item: any) => ({
      product_id: Number(item.productId),
      quantity: Number(item.quantity),
    }));

    this.ordersService.addOrder({
      customerId,
      items: mappedItems,
    }).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
