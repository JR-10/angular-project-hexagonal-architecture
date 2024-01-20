
export class IDataEndPoint<T> {
  count?: string | number;
  data: T;
  date: string;
  message: string[];
  status: string;

  constructor(type?: T) {
    this.data = type as T;
    this.date = '';
    this.message = [];
    this.status = '';
  }
}

export class ColumnTable {
  name?: string;
  idColumn?: string;
  preder?: boolean;
  sticky?: boolean;
  currency?: boolean;
  disabled?: boolean;
  stickyEnd?: boolean;
}

export interface IPagination {
  totalPages?: number;
  totalElements?: number;
}




