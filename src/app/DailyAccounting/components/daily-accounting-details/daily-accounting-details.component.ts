import {Component, Input, OnInit} from '@angular/core';
import {DailyAccounting} from "../../models/daily-accounting.model";
import {DailyAccountingService} from "../../services/daily-accounting.service";
import {ActivatedRoute, Router} from "@angular/router";

import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-daily-accounting-details',
  templateUrl: './daily-accounting-details.component.html',
  styleUrls: ['./daily-accounting-details.component.css']
})
export class DailyAccountingDetailsComponent implements OnInit {

  @Input() viewMode = false;


  @Input() currentTutorial: DailyAccounting = {
    title: '',
    description: '',
    recipeToday: 0,
    balancePreviousMonth: 0,


    totalRecipeToday: 0,

    operationTreasuryAnterior: 0,
    operationTreasuryToday: 0,

    totalOperationTreasury:0,

    operationPreviousRegulation: 0,
    operationRegulationToday: 0,

    totalOperationRegulation: 0,

    totalExpenses: 0,

    dalyAccountBalance: 0,

    postCurrentAccount: 0,
    creditExpected: 0,
    rateExpected: 0,

    finalPostalAccount:0,

    otherValues: 0,
    statesRepartition: 0,

    totalCash: 0,

    moneySpecies: 0,

    moneyInCoinsInCash: 0,

    published: false
  };


  constructor(
    private tutorialService: DailyAccountingService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.getTutorial(this.route.snapshot.params["id"]);
    }

  }


  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      recipeToday: this.currentTutorial.recipeToday,
      balancePreviousMonth: this.currentTutorial.balancePreviousMonth,
      operationTreasuryAnterior: this.currentTutorial.operationTreasuryAnterior,
      operationTreasuryToday: this.currentTutorial.operationTreasuryToday,
      operationPreviousRegulation: this.currentTutorial.operationPreviousRegulation,
      operationRegulationToday: this.currentTutorial.operationRegulationToday,
      postCurrentAccount: this.currentTutorial.postCurrentAccount,
      creditExpected: this.currentTutorial.creditExpected,
      rateExpected: this.currentTutorial.rateExpected,
      otherValues: this.currentTutorial.otherValues,
      statesRepartition: this.currentTutorial.statesRepartition,
      moneySpecies: this.currentTutorial.moneySpecies,
      published: status
    };

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.toastr.info('Opération mise à jour avec Succès', 'Application: Livre de Caisse');
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('Opération mise à jour avec Succès', 'Application: Livre de Caisse');
          this.router.navigate(['/tutorials']);

        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}
