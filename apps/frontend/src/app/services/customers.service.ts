import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Customer {
  name: string;
  birth_date: string;
  phone_number: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(
    private http: HttpClient,
  ) {}
  
  getCustomers() {
    return this.http.get<Customer[]>('http://localhost:3000/customers')
  }
}
