export interface FilterInvoiceParams {
  keyword?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
}

export interface FilterSavingParams {
  type?: string;
  status?: string;
  page?: number;
}

export interface PersonalSavingsFilterParams {
  keyword?: string;
  minAmount?: number;
  maxAmount?: number;
  page?: number;
}
