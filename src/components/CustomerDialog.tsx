import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Stack,
} from '@mui/material';
import type { CustomerDialogProps } from './types';
import type { ICustomer } from '../data';

const emptyCustomer: ICustomer = {
  id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  status: 'Active',
  totalSpent: 0,
  lastOrder: '',
  avatarInitials: '',
};

/** Dialog form for adding or editing a customer */
export const CustomerDialog: React.FC<CustomerDialogProps> = ({ open, customer, onClose, onSave }) => {
  const [form, setForm] = useState<ICustomer>(emptyCustomer);
  const isEditing = customer !== null;

  useEffect(() => {
    if (customer) {
      setForm({ ...customer });
    } else {
      setForm({
        ...emptyCustomer,
        id: `CUS-${String(Date.now()).slice(-3)}`,
        lastOrder: new Date().toISOString().split('T')[0],
      });
    }
  }, [customer, open]);

  const handleFieldChange = (field: keyof ICustomer, value: string | boolean) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'name' && typeof value === 'string') {
        const parts = value.trim().split(' ');
        updated.avatarInitials = parts
          .filter(Boolean)
          .map((p) => p[0].toUpperCase())
          .slice(0, 2)
          .join('');
      }
      return updated;
    });
  };

  const handleSaveClick = () => {
    onSave(form);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{isEditing ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            fullWidth
            value={form.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            type="email"
            value={form.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          <TextField
            label="Phone"
            fullWidth
            value={form.phone}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
          />
          <TextField
            label="Address"
            fullWidth
            value={form.address}
            onChange={(e) => handleFieldChange('address', e.target.value)}
          />
          <FormControlLabel
            control={
              <Switch
                checked={form.status === 'Active'}
                onChange={(e) => handleFieldChange('status', e.target.checked ? 'Active' : 'Inactive')}
              />
            }
            label="Active"
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSaveClick}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
