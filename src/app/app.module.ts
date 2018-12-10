import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BookDetailsComponent } from './catalog/book-details/book-details.component';
import {FormsModule} from "@angular/forms";
import { CatalogService } from 'src/services/catalog.service';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'customer-details', component: CustomerDetailsComponent },
    { path: '**', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BookDetailsComponent,
    HomeComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
