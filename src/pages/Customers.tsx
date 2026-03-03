import React, { useReducer, useCallback } from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { CustomerTable, CustomerDialog, ConfirmDialog } from '../components';
import type { ICustomer } from '../data';
import { customersReducer, initialCustomersState } from './customersReducer';

/** Customers page with CRUD operations via dialogs */
export const Customers: React.FC = () => {
  const [state, dispatch] = useReducer(customersReducer, initialCustomersState);

  const handleSearchChange = useCallback((query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  }, []);

  const handleAddCustomerClick = useCallback(() => {
    dispatch({ type: 'OPEN_ADD_DIALOG' });
  }, []);

  const handleEditCustomerClick = useCallback((customer: ICustomer) => {
    dispatch({ type: 'OPEN_EDIT_DIALOG', payload: customer });
  }, []);

  const handleDeleteCustomerClick = useCallback((customer: ICustomer) => {
    dispatch({ type: 'OPEN_DELETE_CONFIRM', payload: customer });
  }, []);

  const handleCustomerEditSubmit = useCallback((customer: ICustomer) => {
    dispatch({ type: 'SAVE_CUSTOMER', payload: customer });
  }, []);

  const handleDialogClose = useCallback(() => {
    dispatch({ type: 'CLOSE_DIALOG' });
  }, []);

  const handleDeleteConfirmation = useCallback(() => {
    dispatch({ type: 'CONFIRM_DELETE' });
  }, []);

  const handleDeleteCancel = useCallback(() => {
    dispatch({ type: 'CLOSE_DELETE_CONFIRM' });
  }, []);

  return (
    <Box>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <CustomerTable
            customers={state.customers}
            searchQuery={state.searchQuery}
            onSearchChange={handleSearchChange}
            onAddCustomer={handleAddCustomerClick}
            onEditCustomer={handleEditCustomerClick}
            onDeleteCustomer={handleDeleteCustomerClick}
          />
        </CardContent>
      </Card>

      <CustomerDialog
        open={state.dialogOpen}
        customer={state.editingCustomer}
        onClose={handleDialogClose}
        onSave={handleCustomerEditSubmit}
      />

      <ConfirmDialog
        open={state.confirmDialogOpen}
        title="Delete Customer"
        message={`Are you sure you want to delete ${state.deleteTarget?.name ?? 'this customer'}?`}
        onConfirm={handleDeleteConfirmation}
        onCancel={handleDeleteCancel}
      />
    </Box>
  );
};
