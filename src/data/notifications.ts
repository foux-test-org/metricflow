import type { INotification } from './types';

export const notifications: INotification[] = [
  {
    id: 'NOTIF-001',
    title: 'New Order Received',
    message: 'Order ORD-002 from Bob Smith is awaiting processing.',
    timestamp: '2 minutes ago',
    read: false,
  },
  {
    id: 'NOTIF-002',
    title: 'Low Stock Alert',
    message: 'Wireless Headphones inventory is below 10 units.',
    timestamp: '1 hour ago',
    read: false,
  },
  {
    id: 'NOTIF-003',
    title: 'Monthly Report Ready',
    message: 'Your January 2026 sales report is available for download.',
    timestamp: '3 hours ago',
    read: false,
  },
  {
    id: 'NOTIF-004',
    title: 'System Update',
    message: 'MetricFlow v2.4 has been deployed with performance improvements.',
    timestamp: '1 day ago',
    read: true,
  },
] as const;
