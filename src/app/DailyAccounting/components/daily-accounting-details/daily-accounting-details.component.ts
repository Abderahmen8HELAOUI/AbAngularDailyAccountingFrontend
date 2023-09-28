import {Component, Input, OnInit} from '@angular/core';
import {DailyAccounting} from "../../models/daily-accounting.model";
import {DailyAccountingService} from "../../services/daily-accounting.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  recetteTotal: any;
  date: any;
  OperationsTreasuryTotal: any;
  OperationsRegulationTotal:any;
  TotalExpenses: any;
  DalyAccountBalance: any;
  FinalPostalAccount: any;
  TotalCash: any;
  MoneyInCoinsInCash: any;


  message = '';

  constructor(
    private tutorialService: DailyAccountingService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }


  }

  getRecetteTotal() {
    this.tutorialService.getRecetteTotal(this.date).subscribe(result => {
      this.recetteTotal = result;
    });

  }

  getOperationsTreasuryTotal(){
    this.tutorialService.getTreasuryOperationsTotal(this.date).subscribe(result=>{
      this.OperationsTreasuryTotal = result
    })
  }

  getOperationsRegulationTotal(){
    this.tutorialService.getRegulationOperationsTotal(this.date).subscribe(result=>{
      this.OperationsRegulationTotal = result
    })
  }

  getTotalExpenses(){
    this.tutorialService.getTotalExpenses(this.date).subscribe(result=>{
      this.TotalExpenses = result
    })
  }

  getDalyAccountBalance(){
    this.tutorialService.getDalyAccountBalance(this.date).subscribe(result=>{
      this.DalyAccountBalance = result
    })
  }

  getFinalPostalAccount(){
    this.tutorialService.getFinalPostalAccount(this.date).subscribe(result=>{
      this.FinalPostalAccount = result
    })
  }

  getTotalCash(){
    this.tutorialService.getTotalCash(this.date).subscribe(result=>{
      this.TotalCash = result
    })
  }

  getMoneyInCoinsInCash(){
    this.tutorialService.getMoneyInCoinsInCash(this.date).subscribe(result=>{
      this.MoneyInCoinsInCash = result
    })
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

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
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
