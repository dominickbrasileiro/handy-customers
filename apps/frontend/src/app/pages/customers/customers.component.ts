import { Component } from '@angular/core';
import { Customer, CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  constructor(
    private customersService: CustomersService,
  ) {}

  customers = this.customersService.getCustomers();

  parseBirthDate(birthDate: string) {
    const localeOffset = new Date().getTimezoneOffset();
    const date = new Date(birthDate);    

    date.setMinutes(date.getMinutes() + localeOffset)
    
    return date;
  }

  toggleActive(customer: Customer) {
    const activateOrDeactivateText = customer.active ? 'deactivate' : 'activate';
    const confirm = window.confirm(`Do you really want to ${activateOrDeactivateText} the customer ${customer.name}?`)
    if (confirm) {
      this.customersService.toggleCustomerStatus(customer).subscribe(() => {
        this.customers = this.customersService.getCustomers();
      });
    }
  }
}
