import React, { useReducer, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { KPICard, RevenueChart, CategoryPieChart, OrdersTable } from '../components';
import { kpiMetrics, revenueData, categoryBreakdown, orders } from '../data';
import { dashboardReducer, initialDashboardState } from './dashboardReducer';

/** Main dashboard page with KPIs, charts, and orders table */
export const Dashboard: React.FC = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialDashboardState);

  const handleTableSortClick = useCallback((column: string) => {
    dispatch({
      type: 'SET_SORT',
      payload: {
        column,
        direction: state.sortColumn === column && state.sortDirection === 'asc' ? 'desc' : 'asc',
      },
    });
  }, [state.sortColumn, state.sortDirection]);

  const handlePageChange = useCallback((page: number) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  }, []);

  const handleRowsPerPageChange = useCallback((rowsPerPage: number) => {
    dispatch({ type: 'SET_ROWS_PER_PAGE', payload: rowsPerPage });
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Grid container spacing={3}>
        {kpiMetrics.map((metric) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={metric.title}>
            <KPICard title={metric.title} value={metric.value} change={metric.change} icon={metric.icon} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <RevenueChart data={revenueData} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CategoryPieChart data={categoryBreakdown} />
        </Grid>
      </Grid>

      <OrdersTable
        orders={orders}
        page={state.page}
        rowsPerPage={state.rowsPerPage}
        sortColumn={state.sortColumn}
        sortDirection={state.sortDirection}
        onSortClick={handleTableSortClick}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};
