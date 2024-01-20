import { IPagination } from '../general.models';

// TODO: interface product
export interface IProduct {
  id: number;
  product: string;
  nameManager: string;
  modificationDate: string;
  state: boolean;
}

export interface IResponseDataProduct {
  data?: IProduct[];
  pagination?: IPagination;
}
