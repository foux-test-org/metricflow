import type { IDailyActivity, ITrafficSource, IMonthlyComparison } from './types';

export const dailyActivity: IDailyActivity[] = Array.from({ length: 30 }, (_, i) => ({
  day: `Jan ${i + 1}`,
  users: Math.floor(800 + Math.random() * 600 + (i > 15 ? 200 : 0)),
}));

export const trafficSources: ITrafficSource[] = [
  { source: 'Direct', visits: 12450, percentage: 35, conversionRate: 4.2 },
  { source: 'Organic', visits: 9820, percentage: 28, conversionRate: 3.8 },
  { source: 'Referral', visits: 5640, percentage: 16, conversionRate: 5.1 },
  { source: 'Social', visits: 4280, percentage: 12, conversionRate: 2.9 },
  { source: 'Email', visits: 3210, percentage: 9, conversionRate: 6.3 },
] as const;

export const monthlyComparisons: IMonthlyComparison[] = [
  {
    title: 'Page Views',
    thisMonth: 145200,
    lastMonth: 132800,
    unit: '',
    sparklineData: [120, 135, 128, 142, 138, 155, 148, 160, 152, 165, 158, 170],
  },
  {
    title: 'Bounce Rate',
    thisMonth: 32.4,
    lastMonth: 35.1,
    unit: '%',
    sparklineData: [38, 36, 35, 34, 33, 35, 34, 32, 33, 31, 32, 30],
  },
  {
    title: 'Avg Session Duration',
    thisMonth: 4.2,
    lastMonth: 3.8,
    unit: 'min',
    sparklineData: [3.5, 3.6, 3.7, 3.8, 3.9, 3.8, 4.0, 4.1, 4.0, 4.2, 4.1, 4.3],
  },
] as const;
