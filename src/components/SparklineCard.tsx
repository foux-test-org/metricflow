import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import type { SparklineCardProps } from './types';

/** Metric comparison card with mini sparkline chart */
export const SparklineCard: React.FC<SparklineCardProps> = ({ comparison }) => {
  const theme = useTheme();
  const { title, thisMonth, lastMonth, unit, sparklineData } = comparison;

  const changePercent = ((thisMonth - lastMonth) / lastMonth) * 100;
  const isPositive = title === 'Bounce Rate' ? changePercent < 0 : changePercent > 0;
  const displayChange = Math.abs(changePercent).toFixed(1);

  const chartData = sparklineData.map((value, index) => ({ index, value }));

  const formatValue = (val: number) => {
    if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
    return `${val}${unit}`;
  };

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 2 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {formatValue(thisMonth)}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: isPositive ? 'success.main' : 'error.main', fontWeight: 600 }}
            >
              {isPositive ? '+' : '-'}{displayChange}% vs last month
            </Typography>
          </Box>
          <Box sx={{ width: 100, height: 40 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={isPositive ? theme.palette.success.main : theme.palette.error.main}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption" color="text.disabled">This month: {formatValue(thisMonth)}</Typography>
          <Typography variant="caption" color="text.disabled">Last month: {formatValue(lastMonth)}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
