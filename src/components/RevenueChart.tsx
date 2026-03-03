import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { useTheme } from '@mui/material/styles';
import type { RevenueChartProps } from './types';

/** Area/line chart showing revenue over time with target comparison */
export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Revenue Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke={theme.palette.text.secondary} />
            <YAxis tick={{ fontSize: 12 }} stroke={theme.palette.text.secondary} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 8,
              }}
              formatter={(value: number | undefined) => [`$${(value ?? 0).toLocaleString()}`, '']}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              fill={theme.palette.primary.main}
              fillOpacity={0.1}
              stroke={theme.palette.primary.main}
              strokeWidth={2}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke={theme.palette.secondary.main}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Target"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
