import type { ICustomer } from '../data';

export interface DashboardState {
  dateRange: { start: string; end: string };
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
  page: number;
  rowsPerPage: number;
}

export type DashboardAction =
  | { type: 'SET_DATE_RANGE'; payload: { start: string; end: string } }
  | { type: 'SET_SORT'; payload: { column: string; direction: 'asc' | 'desc' } }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_ROWS_PER_PAGE'; payload: number };

export interface AnalyticsState {
  chartType: 'bar' | 'line' | 'area';
}

export type AnalyticsAction =
  | { type: 'SET_CHART_TYPE'; payload: 'bar' | 'line' | 'area' };

export interface CustomersState {
  customers: ICustomer[];
  searchQuery: string;
  editingCustomer: ICustomer | null;
  dialogOpen: boolean;
  deleteTarget: ICustomer | null;
  confirmDialogOpen: boolean;
}

export type CustomersAction =
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'OPEN_ADD_DIALOG' }
  | { type: 'OPEN_EDIT_DIALOG'; payload: ICustomer }
  | { type: 'CLOSE_DIALOG' }
  | { type: 'SAVE_CUSTOMER'; payload: ICustomer }
  | { type: 'OPEN_DELETE_CONFIRM'; payload: ICustomer }
  | { type: 'CLOSE_DELETE_CONFIRM' }
  | { type: 'CONFIRM_DELETE' };

export interface ReportsState {
  generatingId: string | null;
  generatedIds: string[];
}

export type ReportsAction =
  | { type: 'START_GENERATE'; payload: string }
  | { type: 'FINISH_GENERATE'; payload: string };

export interface SettingsState {
  general: {
    companyName: string;
    timezone: string;
    currency: string;
    dateFormat: string;
  };
  notifications: {
    emailAlerts: boolean;
    pushNotifications: boolean;
    weeklyDigest: boolean;
    monthlyReport: boolean;
  };
  appearance: {
    theme: 'light' | 'dark';
    accentColor: string;
    compactMode: boolean;
  };
}

export type SettingsAction =
  | { type: 'SET_GENERAL'; payload: Partial<SettingsState['general']> }
  | { type: 'SET_NOTIFICATION_TOGGLE'; payload: { key: keyof SettingsState['notifications']; value: boolean } }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_ACCENT_COLOR'; payload: string }
  | { type: 'SET_COMPACT_MODE'; payload: boolean }
  | { type: 'LOAD_SETTINGS'; payload: SettingsState };
