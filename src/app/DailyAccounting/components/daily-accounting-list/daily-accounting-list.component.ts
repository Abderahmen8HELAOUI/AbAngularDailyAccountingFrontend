import { Component, OnInit } from '@angular/core';
import {DailyAccounting} from "../../models/daily-accounting.model";
import {DailyAccountingService} from "../../services/daily-accounting.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-daily-accounting-list',
  templateUrl: './daily-accounting-list.component.html',
  styles: [
  ]
})
export class DailyAccountingListComponent implements OnInit {

  tutorials: DailyAccounting[] = [];
  currentTutorial: DailyAccounting = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private tutorialService: DailyAccountingService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
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

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.tutorialService.getAll(params)
      .subscribe({
        next: (data) => {
          const { tutorials, totalItems } = data;
          this.tutorials = tutorials;
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
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: DailyAccounting, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    if (confirm('Voulez vous vraiment supprmier toutes les Opérations ')) {
      this.tutorialService.deleteAll()
        .subscribe({
          next: res => {
            console.log(res);
            this.refreshList();
            this.toastr.error('Toutes les Opérations ont bien été supprimées', 'Application Livre de Caisse')
          },
          error: err => {
            console.log(err);
          }
        });
    }

  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveTutorials();
  }

}
