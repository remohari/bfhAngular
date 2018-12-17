import { Injectable } from '@angular/core';
import { Book } from 'src/Common/book';
import { Customer } from 'src/Common/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private orderedBooks: Book[] = [];
    private customer: Customer;
  constructor() { }

    public OrderBook(book: Book) {
        this.orderedBooks.push(book);
    }

    public SaveCusomer(customer : Customer) {
        this.customer = customer;
    }

}
