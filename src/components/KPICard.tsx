import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import {
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  ShoppingCart as ShoppingCartIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';
import type { KPICardProps } from './types';

const iconMap = {
  money: <AttachMoneyIcon />,
  people: <PeopleIcon />,
  trending: <TrendingUpIcon />,
  cart: <ShoppingCartIcon />,
} as const;

/** Displays a single KPI metric with trend indicator */
export const KPICard: React.FC<KPICardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {value}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {isPositive ? (
                <ArrowUpwardIcon sx={{ fontSize: 16, color: 'success.main' }} />
              ) : (
                <ArrowDownwardIcon sx={{ fontSize: 16, color: 'error.main' }} />
              )}
              <Typography
                variant="body2"
                sx={{ color: isPositive ? 'success.main' : 'error.main', fontWeight: 600 }}
              >
                {isPositive ? '+' : ''}{change}%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              bgcolor: 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {iconMap[icon]}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
