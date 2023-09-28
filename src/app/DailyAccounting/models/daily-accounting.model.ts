export class DailyAccounting {
  id?: any;
  title?: string;
  description?: string;
  recipeToday?: number;
  balancePreviousMonth?: number;

  totalRecipeToday?: number;

  operationTreasuryAnterior?: number;
  operationTreasuryToday?: number;

  totalOperationTreasury?: number;

  operationPreviousRegulation?: number;
  operationRegulationToday?: number;

  totalOperationRegulation?: number;

  totalExpenses?: number;

  dalyAccountBalance?: number;

  postCurrentAccount?: number;
  creditExpected?: number;
  rateExpected?: number;

  finalPostalAccount?: number;

  otherValues?: number;
  statesRepartition?: number;

  totalCash?: number;

  moneySpecies?: number;

  moneyInCoinsInCash?: number;

  published?: boolean;
}
