import { ReactNode } from 'react';

export type ColumType<T> = {
  key: keyof T;
  label: string;
  attributes?: Partial<{
    align: 'center' | 'left' | 'right';
    className: string;
    onClick: (e?: React.MouseEvent<HTMLTableCellElement>) => void;
  }>;
  reactNode?: (value: number, row: any) => ReactNode;
};
export type TableProps<T extends Record<string, any>> = {
  columns: ColumType<T>[];
  data: T[] | null;
  tableHeadClassName?: string;
  tableHeadRowClassName?: string;
  tableBodyClassName?: string;
  tableRowBodyClassName?: string;
  onRowClick?: (item: T) => void;
};
