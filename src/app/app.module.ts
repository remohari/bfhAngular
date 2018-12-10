import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BookDetailsComponent } from './catalog/book-details/book-details.component';
import {FormsModule} from "@angular/forms";
import { CatalogService } from 'src/services/catalog.service';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
