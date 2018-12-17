import { Component, OnInit } from '@angular/core';
import { Customer, CreditCardType } from 'src/Common/customer';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
    customer: Customer = new Customer();
    creditCardTypes: string[] = Object.keys(CreditCardType);
  constructor( private orderService: OrderService) { }

  ngOnInit() {
  }

  saveCustomer():void {
    this.orderService.SaveCusomer(this.customer);
  }
}
