import { customers as initialCustomers } from '../data';
import type { CustomersState, CustomersAction } from './types';

export const initialCustomersState: CustomersState = {
  customers: [...initialCustomers],
  searchQuery: '',
  editingCustomer: null,
  dialogOpen: false,
  deleteTarget: null,
  confirmDialogOpen: false,
};

export const customersReducer = (state: CustomersState, action: CustomersAction): CustomersState => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'OPEN_ADD_DIALOG':
      return { ...state, editingCustomer: null, dialogOpen: true };
    case 'OPEN_EDIT_DIALOG':
      return { ...state, editingCustomer: action.payload, dialogOpen: true };
    case 'CLOSE_DIALOG':
      return { ...state, dialogOpen: false, editingCustomer: null };
    case 'SAVE_CUSTOMER': {
      const existing = state.customers.find((c) => c.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          customers: state.customers.map((c) => (c.id === action.payload.id ? action.payload : c)),
          dialogOpen: false,
          editingCustomer: null,
        };
      }
      return {
        ...state,
        customers: [action.payload, ...state.customers],
        dialogOpen: false,
        editingCustomer: null,
      };
    }
    case 'OPEN_DELETE_CONFIRM':
      return { ...state, deleteTarget: action.payload, confirmDialogOpen: true };
    case 'CLOSE_DELETE_CONFIRM':
      return { ...state, deleteTarget: null, confirmDialogOpen: false };
    case 'CONFIRM_DELETE':
      return {
        ...state,
        customers: state.customers.filter((c) => c.id !== state.deleteTarget?.id),
        deleteTarget: null,
        confirmDialogOpen: false,
      };
    default:
      return state;
  }
};
