export interface IListing {
  name: string;
  address: string;
  email?: string;
  phone?: string;
  type?: string;
  status: string;
  source?: string;
  listingSignedDate?: Date;
  listingExpirationDate?: Date;
  projectedCloseDate?: Date;
  actualCloseDate?: Date;
  listPrice: number;
  salePrice?: number;
  commissionPercentage?: number;
  units?: number;
  gci?: number;
  companyDollar?: number;
  royalty?: number;
  referralPaid?: number;
  eAndO?: number;
  inspectionDate?: Date;
  appraisalDate?: Date;
  mortgageCompany?: string;
  titleEscrowCompany?: string;
  
}
