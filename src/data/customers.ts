import type { ICustomer } from './types';

export const customers: ICustomer[] = [
  { id: 'CUS-001', name: 'Alice Johnson', email: 'alice@example.com', phone: '(555) 123-4567', address: '123 Oak Street, Portland, OR', status: 'Active', totalSpent: 1249.50, lastOrder: '2026-02-20', avatarInitials: 'AJ' },
  { id: 'CUS-002', name: 'Bob Smith', email: 'bob@example.com', phone: '(555) 234-5678', address: '456 Elm Avenue, Seattle, WA', status: 'Active', totalSpent: 892.30, lastOrder: '2026-02-19', avatarInitials: 'BS' },
  { id: 'CUS-003', name: 'Carol Davis', email: 'carol@example.com', phone: '(555) 345-6789', address: '789 Pine Road, Austin, TX', status: 'Active', totalSpent: 2104.80, lastOrder: '2026-02-18', avatarInitials: 'CD' },
  { id: 'CUS-004', name: 'David Wilson', email: 'david@example.com', phone: '(555) 456-7890', address: '321 Maple Drive, Denver, CO', status: 'Inactive', totalSpent: 345.00, lastOrder: '2025-12-15', avatarInitials: 'DW' },
  { id: 'CUS-005', name: 'Eva Martinez', email: 'eva@example.com', phone: '(555) 567-8901', address: '654 Cedar Lane, Miami, FL', status: 'Active', totalSpent: 1578.25, lastOrder: '2026-02-16', avatarInitials: 'EM' },
  { id: 'CUS-006', name: 'Frank Brown', email: 'frank@example.com', phone: '(555) 678-9012', address: '987 Birch Court, Chicago, IL', status: 'Active', totalSpent: 3210.99, lastOrder: '2026-02-15', avatarInitials: 'FB' },
  { id: 'CUS-007', name: 'Grace Lee', email: 'grace@example.com', phone: '(555) 789-0123', address: '147 Walnut Way, San Francisco, CA', status: 'Active', totalSpent: 756.40, lastOrder: '2026-02-14', avatarInitials: 'GL' },
  { id: 'CUS-008', name: 'Henry Taylor', email: 'henry@example.com', phone: '(555) 890-1234', address: '258 Spruce Place, Boston, MA', status: 'Inactive', totalSpent: 198.50, lastOrder: '2025-11-20', avatarInitials: 'HT' },
  { id: 'CUS-009', name: 'Ivy Chen', email: 'ivy@example.com', phone: '(555) 901-2345', address: '369 Ash Boulevard, New York, NY', status: 'Active', totalSpent: 4520.75, lastOrder: '2026-02-12', avatarInitials: 'IC' },
  { id: 'CUS-010', name: 'Jack Anderson', email: 'jack@example.com', phone: '(555) 012-3456', address: '741 Willow Street, Phoenix, AZ', status: 'Active', totalSpent: 632.10, lastOrder: '2026-02-11', avatarInitials: 'JA' },
  { id: 'CUS-011', name: 'Karen White', email: 'karen@example.com', phone: '(555) 111-2222', address: '852 Poplar Avenue, Nashville, TN', status: 'Active', totalSpent: 1890.60, lastOrder: '2026-02-10', avatarInitials: 'KW' },
  { id: 'CUS-012', name: 'Leo Garcia', email: 'leo@example.com', phone: '(555) 222-3333', address: '963 Redwood Drive, Los Angeles, CA', status: 'Inactive', totalSpent: 421.00, lastOrder: '2025-10-05', avatarInitials: 'LG' },
  { id: 'CUS-013', name: 'Mia Thomas', email: 'mia@example.com', phone: '(555) 333-4444', address: '159 Cypress Lane, Atlanta, GA', status: 'Active', totalSpent: 967.85, lastOrder: '2026-02-08', avatarInitials: 'MT' },
  { id: 'CUS-014', name: 'Noah Jackson', email: 'noah@example.com', phone: '(555) 444-5555', address: '267 Magnolia Road, Dallas, TX', status: 'Active', totalSpent: 2345.30, lastOrder: '2026-02-07', avatarInitials: 'NJ' },
  { id: 'CUS-015', name: 'Olivia Harris', email: 'olivia@example.com', phone: '(555) 555-6666', address: '378 Hickory Court, Minneapolis, MN', status: 'Active', totalSpent: 1122.45, lastOrder: '2026-02-06', avatarInitials: 'OH' },
] as const;
