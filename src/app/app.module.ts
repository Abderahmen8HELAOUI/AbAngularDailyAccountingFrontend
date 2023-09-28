import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DailyAccountingListComponent } from './DailyAccounting/components/daily-accounting-list/daily-accounting-list.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import { AddDailyAccountingComponent } from './DailyAccounting/components/add-daily-accounting/add-daily-accounting.component';
import { DailyAccountingDetailsComponent } from './DailyAccounting/components/daily-accounting-details/daily-accounting-details.component';

@NgModule({
  declarations: [
    AppComponent,

    DailyAccountingListComponent,
     AddDailyAccountingComponent,
     DailyAccountingDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
