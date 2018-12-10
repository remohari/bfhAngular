import { Injectable } from '@angular/core';
import { Book } from 'src/Common/book';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private orderedBooks: Book[] = [];
  constructor() { }

    public OrderBook(book: Book) {
        this.orderedBooks.push(book);
    }

}
