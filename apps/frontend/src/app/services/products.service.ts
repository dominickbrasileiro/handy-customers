import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  active: boolean;
  created_at: string;
}

export interface AddProductDto {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
  ) {}
  
  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  addProduct(productData: AddProductDto) {
    return this.http.post('http://localhost:3000/products', productData);
  }

  toggleProductStatus(product: Product) {
    return this.http.patch(`http://localhost:3000/products/${product.id}`, {
      active: !product.active,
    });
  }
}