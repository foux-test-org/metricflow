import React, { useReducer, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { BarChart as BarChartIcon, ShowChart as LineChartIcon, StackedLineChart as AreaChartIcon } from '@mui/icons-material';
import { ActivityChart, SparklineCard, TrafficTable } from '../components';
import { dailyActivity, monthlyComparisons, trafficSources } from '../data';
import { analyticsReducer, initialAnalyticsState } from './analyticsReducer';

/** Analytics page with chart type selector, sparkline comparisons, and traffic table */
export const Analytics: React.FC = () => {
  const [state, dispatch] = useReducer(analyticsReducer, initialAnalyticsState);

  const handleChartTypeChange = useCallback((_: React.MouseEvent<HTMLElement>, value: string | null) => {
    if (value) {
      dispatch({ type: 'SET_CHART_TYPE', payload: value as 'bar' | 'line' | 'area' });
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ToggleButtonGroup
          value={state.chartType}
          exclusive
          onChange={handleChartTypeChange}
          size="small"
        >
          <ToggleButton value="bar"><BarChartIcon sx={{ mr: 0.5 }} /> Bar</ToggleButton>
          <ToggleButton value="line"><LineChartIcon sx={{ mr: 0.5 }} /> Line</ToggleButton>
          <ToggleButton value="area"><AreaChartIcon sx={{ mr: 0.5 }} /> Area</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <ActivityChart data={dailyActivity} chartType={state.chartType} />

      <Grid container spacing={3}>
        {monthlyComparisons.map((comparison) => (
          <Grid size={{ xs: 12, md: 4 }} key={comparison.title}>
            <SparklineCard comparison={comparison} />
          </Grid>
        ))}
      </Grid>

      <TrafficTable sources={trafficSources} />
    </Box>
  );
};
