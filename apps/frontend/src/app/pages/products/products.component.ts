import { Component } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(
    private productsService: ProductsService,
  ) {}

  products = this.productsService.getProducts();

  parseBirthDate(birthDate: string) {
    let date: string | string[] = birthDate;
    date = date.substring(0,10).split('-');
    date = date[1] + '-' + date[2] + '-' + date[0];

    return new Date(date);
  }

  toggleActive(product: Product) {
    const activateOrDeactivateText = product.active ? 'deactivate' : 'activate';
    const confirm = window.confirm(`Do you really want to ${activateOrDeactivateText} the product ${product.name}?`)
    if (confirm) {
      this.productsService.toggleProductStatus(product).subscribe(() => {
        this.products = this.productsService.getProducts();
      });
    }
  }
}
