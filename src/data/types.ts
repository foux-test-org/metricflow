export interface IMetric {
  title: string;
  value: string;
  change: number;
  icon: 'money' | 'people' | 'trending' | 'cart';
}

export interface IRevenueDataPoint {
  month: string;
  revenue: number;
  target: number;
}

export interface ICategoryBreakdown {
  name: string;
  value: number;
  color: string;
}

export interface IOrder {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Cancelled' | 'Processing';
  date: string;
}

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'Active' | 'Inactive';
  totalSpent: number;
  lastOrder: string;
  avatarInitials: string;
}

export interface INotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface IDailyActivity {
  day: string;
  users: number;
}

export interface ITrafficSource {
  source: string;
  visits: number;
  percentage: number;
  conversionRate: number;
}

export interface IMonthlyComparison {
  title: string;
  thisMonth: number;
  lastMonth: number;
  unit: string;
  sparklineData: number[];
}

export interface IReport {
  id: string;
  title: string;
  description: string;
  icon: 'assessment' | 'insights' | 'inventory' | 'accountBalance';
  lastGenerated: string;
}
