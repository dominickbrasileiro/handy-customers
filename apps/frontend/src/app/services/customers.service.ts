import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Customer {
  id: number;
  name: string;
  birth_date: string;
  phone_number: string;
  active: boolean;
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
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  getActiveCustomers() {
    return this.http.get<Customer[]>('http://localhost:3000/customers').pipe(
      map((customers) => customers.filter(customer => customer.active)),
    );
  }

  addCustomer(customerData: Omit<Customer, 'created_at'>) {
    return this.http.post('http://localhost:3000/customers', customerData);
  }

  toggleCustomerStatus(customer: Customer) {
    return this.http.patch(`http://localhost:3000/customers/${customer.id}`, {
      active: !customer.active,
    });
  }
}
