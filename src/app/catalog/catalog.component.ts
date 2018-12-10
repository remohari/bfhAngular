import { Component, OnInit } from '@angular/core';
import {BOOK_DATA} from "../../Common/book-data";
import {Book} from "../../Common/book";
import { CatalogService } from 'src/services/catalog.service';

@Component({
  selector: 'books',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  books = BOOK_DATA;
  selectedBook: Book;
  searchTerm: string;
  constructor(private catalogService: CatalogService) {
    //TODO
   }

  ngOnInit(): void {
    //TODO
  }

  selectBook(book : Book): void {
    this.selectedBook = book;
  }
  searchBook(): void {
    this.catalogService.searchBooks(this.searchTerm)
        .then( books => this.books = books)
        .catch( () => this.books = new Books[]);
}