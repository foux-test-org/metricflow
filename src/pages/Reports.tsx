import React, { useReducer, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { ReportCard } from '../components';
import type { IReport } from '../data';
import { reportsReducer, initialReportsState } from './reportsReducer';

const reports: IReport[] = [
  { id: 'sales', title: 'Sales Summary', description: 'Monthly sales breakdown', icon: 'assessment', lastGenerated: 'Jan 15, 2026' },
  { id: 'customers', title: 'Customer Insights', description: 'User behavior analysis', icon: 'insights', lastGenerated: 'Jan 12, 2026' },
  { id: 'inventory', title: 'Inventory Status', description: 'Stock levels overview', icon: 'inventory', lastGenerated: 'Jan 10, 2026' },
  { id: 'financial', title: 'Financial Report', description: 'Revenue and expenses', icon: 'accountBalance', lastGenerated: 'Jan 8, 2026' },
] as const;

/** Reports page with generate/download report cards */
export const Reports: React.FC = () => {
  const [state, dispatch] = useReducer(reportsReducer, initialReportsState);

  const handleGenerateReport = useCallback((reportId: string) => {
    dispatch({ type: 'START_GENERATE', payload: reportId });
    setTimeout(() => {
      dispatch({ type: 'FINISH_GENERATE', payload: reportId });
    }, 2000);
  }, []);

  return (
    <Box>
      <Grid container spacing={3}>
        {reports.map((report) => (
          <Grid size={{ xs: 12, sm: 6 }} key={report.id}>
            <ReportCard
              report={report}
              onGenerate={handleGenerateReport}
              generating={state.generatingId === report.id}
              generated={state.generatedIds.includes(report.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
