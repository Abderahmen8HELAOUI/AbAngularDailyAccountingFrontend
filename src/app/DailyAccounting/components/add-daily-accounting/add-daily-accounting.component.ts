import { Component, OnInit } from '@angular/core';
import {DailyAccounting} from "../../models/daily-accounting.model";
import {DailyAccountingService} from "../../services/daily-accounting.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-daily-accounting',
  templateUrl: './add-daily-accounting.component.html',
  styles: [
  ]
})
export class AddDailyAccountingComponent implements OnInit {

  tutorial: DailyAccounting = {
    title: '',
    description: '',
    recipeToday: 0.000,
    balancePreviousMonth: 0,
    operationTreasuryAnterior: 0,
    operationTreasuryToday: 0,
    operationPreviousRegulation: 0,
    operationRegulationToday: 0,
    postCurrentAccount: 0,
    creditExpected: 0,
    rateExpected: 0,
    otherValues: 0,
    statesRepartition: 0,
    moneySpecies: 0,
    published: false
  };
  submitted = false;

  constructor(private tutorialService: DailyAccountingService,
              private toastr: ToastrService,
              private router: Router) { }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      recipeToday: this.tutorial.recipeToday,
      balancePreviousMonth: this.tutorial.balancePreviousMonth,
      operationTreasuryAnterior: this.tutorial.operationTreasuryAnterior,
      operationTreasuryToday: this.tutorial.operationTreasuryToday,
      operationPreviousRegulation: this.tutorial.operationPreviousRegulation,
      operationRegulationToday: this.tutorial.operationRegulationToday,
      postCurrentAccount: this.tutorial.postCurrentAccount,
      creditExpected: this.tutorial.creditExpected,
      rateExpected: this.tutorial.rateExpected,
      otherValues: this.tutorial.otherValues,
      statesRepartition: this.tutorial.statesRepartition,
      moneySpecies: this.tutorial.moneySpecies
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.toastr.success('Opération Ajoutée avec Succès', 'Application: Livre de Caisse');
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      recipeToday: 0,
      balancePreviousMonth: 0,
      operationTreasuryAnterior: 0,
      operationTreasuryToday: 0,
      operationPreviousRegulation: 0,
      operationRegulationToday: 0,
      postCurrentAccount: 0,
      creditExpected: 0,
      rateExpected: 0,
      otherValues: 0,
      statesRepartition: 0,
      moneySpecies: 0,
      published: false
    };
  }

  ngOnInit(): void {
  }


}
