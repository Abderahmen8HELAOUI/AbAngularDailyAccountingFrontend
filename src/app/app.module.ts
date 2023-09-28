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
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ConsultationOperationDetailsComponent } from './DailyAccounting/components/consultation-operation-details/consultation-operation-details.component';

@NgModule({
  declarations: [
    AppComponent,

    DailyAccountingListComponent,
     AddDailyAccountingComponent,
     DailyAccountingDetailsComponent,
     ConsultationOperationDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
