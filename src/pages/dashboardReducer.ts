import dayjs from 'dayjs';
import type { DashboardState, DashboardAction } from './types';

export const initialDashboardState: DashboardState = {
  dateRange: {
    start: dayjs().subtract(30, 'day').format('YYYY-MM-DD'),
    end: dayjs().format('YYYY-MM-DD'),
  },
  sortColumn: 'date',
  sortDirection: 'desc',
  page: 0,
  rowsPerPage: 5,
};

export const dashboardReducer = (state: DashboardState, action: DashboardAction): DashboardState => {
  switch (action.type) {
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.payload };
    case 'SET_SORT':
      return { ...state, sortColumn: action.payload.column, sortDirection: action.payload.direction };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_ROWS_PER_PAGE':
      return { ...state, rowsPerPage: action.payload, page: 0 };
    default:
      return state;
  }
};
