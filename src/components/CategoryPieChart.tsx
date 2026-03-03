import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '@mui/material/styles';
import type { CategoryPieChartProps } from './types';

/** Donut/pie chart showing revenue breakdown by category */
export const CategoryPieChart: React.FC<CategoryPieChartProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Revenue by Category
        </Typography>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 8,
              }}
              formatter={(value: number | undefined) => [`${value ?? 0}%`, '']}
            />
          </PieChart>
        </ResponsiveContainer>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 1 }}>
          {data.map((entry) => (
            <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: entry.color }} />
              <Typography variant="caption" color="text.secondary">{entry.name}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
