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
    let date: string | string[] = birthDate;
    date = date.substring(0,10).split('-');
    date = date[1] + '-' + date[2] + '-' + date[0];

    return new Date(date);
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
