import { ReactNode } from 'react';

export type ColumType<T> = {
  key: keyof T;
  label: string;
  attributes?: Partial<{
    align: 'center' | 'left' | 'right';
    className: string;
    onClick: () => void;
  }>;
  reactNode?: (value?: number) => ReactNode;
};
export type TableProps<T extends Record<string, any>> = {
  columns: ColumType<T>[];
  data: T[];
  tableHeadClassName?: string;
  tableHeadRowClassName?: string;
  tableBodyClassName?: string;
  tableRowBodyClassName?: string;
};
