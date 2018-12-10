import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/Common/book';
import { OrderService } from 'src/services/order.service';
import {Router } from '@angular/router';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input()
  public book: Book;
  
  @Output()
  public back = new EventEmitter();
  
    constructor(private router: Router, private orderService: OrderService) {}
    
    public orderBook(): void {
        this.orderService.OrderBook(this.book);
        this.router.navigateByUrl('/customer-details');
    }
    ngOnInit() {
  }

}
