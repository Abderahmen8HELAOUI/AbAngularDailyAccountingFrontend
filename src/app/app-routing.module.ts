import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {
  DailyAccountingListComponent
} from "./DailyAccounting/components/daily-accounting-list/daily-accounting-list.component";

const routes: Routes = [{ path: '', redirectTo: 'dailyAccounting', pathMatch: 'full' },
  { path: 'dailyAccounting', component: DailyAccountingListComponent },
  // { path: 'dailyAccounting/:id', component: DailyAccountingDetailsComponent },
  // { path: 'addDailyAccounting', component: AddDailyAccountingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
