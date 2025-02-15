import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
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
type TableProps<T extends Record<string, any>> = {
  columns: ColumType<T>[];
  data: T[];
  tableHeadClassName?: string;
  tableHeadRowClassName?: string;
  tableBodyClassName?: string;
  tableRowBodyClassName?: string;
};
export const TableComponent = <T extends Record<string, any>>({
  columns,
  data,
  tableHeadClassName,
  tableHeadRowClassName,
  tableBodyClassName,
  tableRowBodyClassName,
}: TableProps<T>) => {
  return (
    <Table>
      <TableHead className={tableHeadClassName}>
        <TableRow className={tableHeadRowClassName}>
          {columns.map((item) => (
            <TableCell key={String(item.key)} {...item.attributes}>
              {item.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody className={tableBodyClassName}>
        {data.map((item) => (
          <TableRow key={item.id} className={tableRowBodyClassName}>
            {columns.map((col) => (
              <TableCell key={String(col.key)} {...col.attributes}>
                {col.reactNode ? col.reactNode(item[col.key]) : item[col.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
