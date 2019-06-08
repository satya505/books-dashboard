import { NgModule } from '@angular/core';
//import {CommonModule} from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { BookDashboardModule } from './books-dashboard/books-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,FormsModule,BookDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
