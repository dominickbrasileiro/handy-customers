import { Component } from '@angular/core';
import { Customer, CustomersService } from 'src/app/services/customers.service';
import { map } from 'rxjs/operators';

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
    this.customersService.toggleCustomerStatus(customer).subscribe(() => {
      this.customers = this.customersService.getCustomers();
    });
  }
}
