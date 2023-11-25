export class DailyAccounting {
  id?: any;
  title?: string;

 recipeToday?: number;
  balancePreviousMonth?: number;

  operationTreasuryAnterior?: number;
  operationTreasuryToday?: number;

  operationPreviousRegulation?: number;
  operationRegulationToday?: number;

  postCurrentAccount?: number;
  creditExpected?: number;
  rateExpected?: number;

  otherValues?: number;
  statesRepartition?: number;

  moneySpecies?: number;

}
