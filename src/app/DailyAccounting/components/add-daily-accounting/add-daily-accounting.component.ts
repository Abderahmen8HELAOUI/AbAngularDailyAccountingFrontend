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
    moneySpecies: 0
  };
  submitted = false;

  dalyAccountBalance:any;

  constructor(private tutorialService: DailyAccountingService,
              private toastr: ToastrService,
              private router: Router) { }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
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
      moneySpecies: 0
    };
  }

  ngOnInit(): void {
    //total opérations trésor
    this.tutorialService.getTotalTreasuryOperationsLastDay().subscribe(
      res => {
        this.tutorial.operationTreasuryAnterior = res;
        console.log(res);
      }
    );

    //total Opérations Régulation
    this.tutorialService.getTotalRegulationOperationsLastDay().subscribe(
      res => {
        this.tutorial.operationPreviousRegulation = res;
        console.log(res);
      }
    );

    //solde Mois Précedent
    this.tutorialService.getBalancePreviousMonth().subscribe(
      res => {
        this.tutorial.balancePreviousMonth = res;
        console.log(res);
      }
    );
    //1
    this.tutorialService.getPostalCurrentAccount().subscribe(
      res => {
        this.tutorial.postCurrentAccount = res;
        console.log(res);
      }
    );
    //2
    this.tutorialService.getCreditExpected().subscribe(
      res => {
        this.tutorial.creditExpected = res;
        console.log(res);
      }
    );
    //3
    this.tutorialService.getExpectedFlow().subscribe(
      res => {
        this.tutorial.rateExpected = res;
        console.log(res);
      }
    );
    //4
    this.tutorialService.getOtherValues().subscribe(
      res => {
        this.tutorial.otherValues = res;
        console.log(res);
      }
    );
    //5
    this.tutorialService.getStatesRepartition().subscribe(
      res => {
        this.tutorial.statesRepartition = res;
        console.log(res);
      }
    );
  }


}
