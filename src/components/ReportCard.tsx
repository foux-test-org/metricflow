import React from 'react';
import { Card, CardContent, Typography, Button, Box, LinearProgress } from '@mui/material';
import {
  Assessment as AssessmentIcon,
  Insights as InsightsIcon,
  Inventory as InventoryIcon,
  AccountBalance as AccountBalanceIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import type { ReportCardProps } from './types';

const iconMap = {
  assessment: <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  insights: <InsightsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
  inventory: <InventoryIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
  accountBalance: <AccountBalanceIcon sx={{ fontSize: 40, color: 'success.main' }} />,
} as const;

/** Report card with generate/download functionality */
export const ReportCard: React.FC<ReportCardProps> = ({ report, onGenerate, generating, generated }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          {iconMap[report.icon]}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{report.title}</Typography>
            <Typography variant="body2" color="text.secondary">{report.description}</Typography>
          </Box>
        </Box>

        <Typography variant="caption" color="text.disabled" sx={{ mb: 2 }}>
          Last generated: {report.lastGenerated}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          {generating && <LinearProgress sx={{ mb: 1 }} />}
          {generated ? (
            <Button variant="outlined" startIcon={<DownloadIcon />} fullWidth>
              Download PDF
            </Button>
          ) : (
            <Button
              variant="contained"
              fullWidth
              onClick={() => onGenerate(report.id)}
              disabled={generating}
            >
              {generating ? 'Generating...' : 'Generate Report'}
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
