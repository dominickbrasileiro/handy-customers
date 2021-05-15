import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

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
}
