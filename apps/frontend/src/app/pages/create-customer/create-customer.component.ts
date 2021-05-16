import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  constructor(
    private customersService: CustomersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
  ) {}

  createCustomerForm = this.formBuilder.group({
    name: '',
    birth_date: '',
    phone_number: '',
  });

  get minBirthDate() {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 13);
    return today.toISOString().split("T")[0];
  }

  get maxBirthDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.customersService.addCustomer(this.createCustomerForm.value).subscribe(() => {
      this.router.navigate(['customers']);
    });
  }
}
