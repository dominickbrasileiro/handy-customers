import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
  ) {}

  createProductForm = this.formBuilder.group({
    name: '',
    price: 0,
  });

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.productsService.addProduct(this.createProductForm.value).subscribe(() => {
      this.router.navigate(['products']);
    });
  }
}
