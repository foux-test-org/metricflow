import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Typography,
  Chip,
  IconButton,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon, Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import type { CustomerTableProps } from './types';

/** Customer data table with search, edit, and delete actions */
export const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  searchQuery,
  onSearchChange,
  onAddCustomer,
  onEditCustomer,
  onDeleteCustomer,
}) => {
  const filteredCustomers = React.useMemo(() => {
    if (!searchQuery) return customers;
    const q = searchQuery.toLowerCase();
    return customers.filter(
      (c) => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
    );
  }, [customers, searchQuery]);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
        <TextField
          size="small"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1, maxWidth: 400 }}
        />
        <Button variant="contained" startIcon={<AddIcon />} onClick={onAddCustomer}>
          Add Customer
        </Button>
      </Box>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total Spent</TableCell>
              <TableCell>Last Order</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 12 }}>
                      {customer.avatarInitials}
                    </Avatar>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{customer.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  <Chip
                    label={customer.status}
                    color={customer.status === 'Active' ? 'success' : 'default'}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                <TableCell>{customer.lastOrder}</TableCell>
                <TableCell align="right">
                  <IconButton size="small" onClick={() => onEditCustomer(customer)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => onDeleteCustomer(customer)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
