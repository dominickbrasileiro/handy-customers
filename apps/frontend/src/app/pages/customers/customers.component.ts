import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  customers = [
    {
      name: 'Dominick Brasileiro',
      birth_date: new Date(2003, 7, 26),
      phone_number: '+5547997573495',
      created_at: new Date()
    },
    {
      name: 'Dominick Brasileiro',
      birth_date: new Date(2003, 7, 26),
      phone_number: '+5547997573495',
      created_at: new Date()
    },
    {
      name: 'Dominick Brasileiro',
      birth_date: new Date(2003, 7, 26),
      phone_number: '+5547997573495',
      created_at: new Date()
    },
    {
      name: 'Dominick Brasileiro',
      birth_date: new Date(2003, 7, 26),
      phone_number: '+5547997573495',
      created_at: new Date()
    }
  ];
}
