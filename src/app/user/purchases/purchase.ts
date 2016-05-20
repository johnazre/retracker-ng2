export interface IPurchase {
  client: string;
  address: string;
  status: string;
  contractDate: Date;
  projectedCloseDate: Date;
  actualCloseDate: Date;
  listPrice: number;
  offerPrice: number;
  salePrice: number;
  commissionPercentage: number;
  units: number;
  gci: number;
  companyDollar: number;
  royalty: number;
  referralPaid: number;
  eAndO: number;
  appraisalDate: Date;
  mortgageCompany: string;
  titleEscrowCompany: string;
}
