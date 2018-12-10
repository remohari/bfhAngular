import { Injectable } from '@angular/core';
import { Book } from 'src/Common/book';
import { BOOK_DATA } from 'src/Common/book-data';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
    public searchBooks(keyowrds: string): Promise<Book[]> {
        return new Promise<Book[]>((resolve, reject) => {
            let books = BOOK_DATA;
            if(keyowrds) {
                books = books.filter( book =>  this.objectContains(book, keyowrds));
            }
            if(books.length) {
                resolve(books);
            } else{ reject("Random error"); }
        });
    }
    private objectContains(obj: any, term: string): boolean {
        for (let key in obj){
            if(typeof obj[key] === "string" && obj[key].toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) != -1) return true;
        }
        return false;
    }
}
