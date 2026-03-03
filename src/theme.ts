import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const commonOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: 'light',
    primary: { main: '#1565C0' },
    secondary: { main: '#00897B' },
    success: { main: '#4CAF50' },
    warning: { main: '#FF9800' },
    error: { main: '#F44336' },
    info: { main: '#2196F3' },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
});

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: 'dark',
    primary: { main: '#42A5F5' },
    secondary: { main: '#26A69A' },
    success: { main: '#66BB6A' },
    warning: { main: '#FFA726' },
    error: { main: '#EF5350' },
    info: { main: '#42A5F5' },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});
