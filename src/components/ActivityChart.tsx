import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@mui/material/styles';
import type { ActivityChartProps } from './types';

/** Switchable chart (bar/line/area) showing daily user activity */
export const ActivityChart: React.FC<ActivityChartProps> = ({ data, chartType }) => {
  const theme = useTheme();

  const commonProps = {
    data,
    margin: { top: 5, right: 20, left: 0, bottom: 5 },
  };

  const commonChildren = (
    <>
      <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
      <XAxis dataKey="day" tick={{ fontSize: 11 }} stroke={theme.palette.text.secondary} interval={4} />
      <YAxis tick={{ fontSize: 12 }} stroke={theme.palette.text.secondary} />
      <Tooltip
        contentStyle={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 8,
        }}
      />
    </>
  );

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            {commonChildren}
            <Bar dataKey="users" fill={theme.palette.primary.main} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart {...commonProps}>
            {commonChildren}
            <Line type="monotone" dataKey="users" stroke={theme.palette.primary.main} strokeWidth={2} dot={false} />
          </LineChart>
        );
      case 'area':
        return (
          <AreaChart {...commonProps}>
            {commonChildren}
            <Area type="monotone" dataKey="users" fill={theme.palette.primary.main} fillOpacity={0.1} stroke={theme.palette.primary.main} strokeWidth={2} />
          </AreaChart>
        );
    }
  };

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          User Activity
        </Typography>
        <ResponsiveContainer width="100%" height={350}>
          {renderChart()}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
