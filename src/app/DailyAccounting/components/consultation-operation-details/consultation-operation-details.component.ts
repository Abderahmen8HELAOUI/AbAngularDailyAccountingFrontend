import { Component, OnInit } from '@angular/core';
import {DailyAccountingService} from "../../services/daily-accounting.service";

@Component({
  selector: 'app-consultation-operation-details',
  templateUrl: './consultation-operation-details.component.html',
  styleUrls: ['./consultation-operation-details.component.css']
})
export class ConsultationOperationDetailsComponent implements OnInit {


  recetteTotal: any;
  date: any;
  OperationsTreasuryTotal: any;
  OperationsRegulationTotal:any;
  TotalExpenses: any;
  DalyAccountBalance: any;
  FinalPostalAccount: any;
  TotalCash: any;
  MoneyInCoinsInCash: any;

  constructor(private tutorialService: DailyAccountingService) { }

  ngOnInit(): void {
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


}
