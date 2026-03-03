import type { IMetric, IOrder, ICustomer, INotification, IRevenueDataPoint, ICategoryBreakdown, IDailyActivity, ITrafficSource, IMonthlyComparison, IReport } from '../data';

export interface SidebarProps {
  activePage: string;
  collapsed: boolean;
  onNavigate: (page: string) => void;
  onToggleCollapse: () => void;
}

export interface TopBarProps {
  pageTitle: string;
  dateRange: { start: string; end: string };
  onDateRangeChange: (start: string, end: string) => void;
}

export interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: IMetric['icon'];
}

export interface RevenueChartProps {
  data: IRevenueDataPoint[];
}

export interface CategoryPieChartProps {
  data: ICategoryBreakdown[];
}

export interface OrdersTableProps {
  orders: IOrder[];
  page: number;
  rowsPerPage: number;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
  onSortClick: (column: string) => void;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}

export interface CustomerTableProps {
  customers: ICustomer[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddCustomer: () => void;
  onEditCustomer: (customer: ICustomer) => void;
  onDeleteCustomer: (customer: ICustomer) => void;
}

export interface CustomerDialogProps {
  open: boolean;
  customer: ICustomer | null;
  onClose: () => void;
  onSave: (customer: ICustomer) => void;
}

export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface NotificationPopoverProps {
  anchorEl: HTMLElement | null;
  notifications: INotification[];
  onClose: () => void;
}

export interface ReportCardProps {
  report: IReport;
  onGenerate: (reportId: string) => void;
  generating: boolean;
  generated: boolean;
}

export interface ActivityChartProps {
  data: IDailyActivity[];
  chartType: 'bar' | 'line' | 'area';
}

export interface SparklineCardProps {
  comparison: IMonthlyComparison;
}

export interface TrafficTableProps {
  sources: ITrafficSource[];
}
