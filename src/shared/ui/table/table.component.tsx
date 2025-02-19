import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableProps } from "shared/types";

export const BasicTable = <T extends Record<string, any>>({
  columns,
  data,
  tableHeadClassName,
  tableHeadRowClassName,
  tableBodyClassName,
  tableRowBodyClassName,
  onRowClick,
}: TableProps<T>) => {
  return (
    <Table>
      <TableHead className={tableHeadClassName}>
        <TableRow className={tableHeadRowClassName}>
          {columns.map((item) => (
            <TableCell key={String(item.key)} align={item.attributes?.align}>
              {item.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody className={tableBodyClassName}>
        {data?.map((item) => (
          <TableRow
            key={item.id}
            className={tableRowBodyClassName}
            onClick={() => onRowClick?.(item)}
          >
            {columns.map((col) => (
              <TableCell key={String(col.key)} {...col.attributes}>
                {col.reactNode
                  ? col.reactNode(item[col.key], item)
                  : item[col.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
