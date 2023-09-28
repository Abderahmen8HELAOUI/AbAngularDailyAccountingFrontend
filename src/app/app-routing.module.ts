import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {
  DailyAccountingListComponent
} from "./DailyAccounting/components/daily-accounting-list/daily-accounting-list.component";
import {
  DailyAccountingDetailsComponent
} from "./DailyAccounting/components/daily-accounting-details/daily-accounting-details.component";
import {
  AddDailyAccountingComponent
} from "./DailyAccounting/components/add-daily-accounting/add-daily-accounting.component";

const routes: Routes = [{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: DailyAccountingListComponent },
   { path: 'tutorials/:id', component: DailyAccountingDetailsComponent },
   { path: 'add', component: AddDailyAccountingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
