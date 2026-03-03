import type { IMetric, IRevenueDataPoint, ICategoryBreakdown } from './types';

export const kpiMetrics: IMetric[] = [
  { title: 'Total Revenue', value: '$48,295', change: 12.5, icon: 'money' },
  { title: 'Active Users', value: '2,847', change: 8.2, icon: 'people' },
  { title: 'Conversion Rate', value: '3.6%', change: -0.4, icon: 'trending' },
  { title: 'Avg Order Value', value: '$67.40', change: 2.1, icon: 'cart' },
] as const;

export const revenueData: IRevenueDataPoint[] = [
  { month: 'Jan', revenue: 32000, target: 30000 },
  { month: 'Feb', revenue: 28000, target: 31000 },
  { month: 'Mar', revenue: 35000, target: 32000 },
  { month: 'Apr', revenue: 40000, target: 33000 },
  { month: 'May', revenue: 38000, target: 34000 },
  { month: 'Jun', revenue: 42000, target: 35000 },
  { month: 'Jul', revenue: 45000, target: 36000 },
  { month: 'Aug', revenue: 41000, target: 37000 },
  { month: 'Sep', revenue: 47000, target: 38000 },
  { month: 'Oct', revenue: 44000, target: 39000 },
  { month: 'Nov', revenue: 46000, target: 40000 },
  { month: 'Dec', revenue: 48295, target: 41000 },
] as const;

export const categoryBreakdown: ICategoryBreakdown[] = [
  { name: 'Electronics', value: 35, color: '#1565C0' },
  { name: 'Clothing', value: 25, color: '#00897B' },
  { name: 'Food', value: 20, color: '#FF9800' },
  { name: 'Services', value: 12, color: '#4CAF50' },
  { name: 'Other', value: 8, color: '#9E9E9E' },
] as const;
