import { Component, OnInit } from '@angular/core';
import {DailyAccounting} from "../../models/daily-accounting.model";
import {DailyAccountingService} from "../../services/daily-accounting.service";

@Component({
  selector: 'app-daily-accounting-list',
  templateUrl: './daily-accounting-list.component.html',
  styles: [
  ]
})
export class DailyAccountingListComponent implements OnInit {

  dailyAccounting: DailyAccounting[] = [];
  currentDailyAccounting: DailyAccounting = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private dailyAccountingService: DailyAccountingService) { }

  ngOnInit(): void {
    this.retrieveDailyAccounting();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveDailyAccounting(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.dailyAccountingService.getAll(params)
      .subscribe({
        next: (data) => {
          const { dailyAccounting, totalItems } = data;
          this.dailyAccounting = dailyAccounting;
          this.count = totalItems;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveDailyAccounting();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveDailyAccounting();
  }

  refreshList(): void {
    this.retrieveDailyAccounting();
    this.currentDailyAccounting = {};
    this.currentIndex = -1;
  }

  setActiveDailyAccounting(dailyAccounting: DailyAccounting, index: number): void {
    this.currentDailyAccounting = dailyAccounting;
    this.currentIndex = index;
  }

  removeAllDailyAccounting(): void {
    this.dailyAccountingService.deleteAll()
      .subscribe({
        next: res => {
          console.log(res);
          this.refreshList();
        },
        error: err => {
          console.log(err);
        }
      });

  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveDailyAccounting();
  }

}
