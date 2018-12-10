import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/Common/book';

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
  
  constructor() { }  
  ngOnInit() {
  }

}
