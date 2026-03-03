import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Chip,
} from '@mui/material';
import type { OrdersTableProps } from './types';
import type { IOrder } from '../data';

const statusColorMap: Record<IOrder['status'], 'success' | 'warning' | 'error' | 'info'> = {
  Completed: 'success',
  Pending: 'warning',
  Cancelled: 'error',
  Processing: 'info',
};

const columns = [
  { key: 'id', label: 'Order ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'product', label: 'Product' },
  { key: 'amount', label: 'Amount' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
] as const;

/** Sortable, paginated orders table with status chips */
export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  page,
  rowsPerPage,
  sortColumn,
  sortDirection,
  onSortClick,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const sortedOrders = React.useMemo(() => {
    return [...orders].sort((a, b) => {
      const aVal = a[sortColumn as keyof IOrder];
      const bVal = b[sortColumn as keyof IOrder];
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }
      const aStr = String(aVal);
      const bStr = String(bVal);
      return sortDirection === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
  }, [orders, sortColumn, sortDirection]);

  const paginatedOrders = React.useMemo(() => {
    return sortedOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [sortedOrders, page, rowsPerPage]);

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Recent Orders
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    <TableSortLabel
                      active={sortColumn === col.key}
                      direction={sortColumn === col.key ? sortDirection : 'asc'}
                      onClick={() => onSortClick(col.key)}
                    >
                      {col.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedOrders.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>${order.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={statusColorMap[order.status]}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={orders.length}
          page={page}
          onPageChange={(_, newPage) => onPageChange(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value, 10))}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardContent>
    </Card>
  );
};
