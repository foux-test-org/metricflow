import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  LinearProgress,
} from '@mui/material';
import type { TrafficTableProps } from './types';

/** Traffic source breakdown table with percentage bars */
export const TrafficTable: React.FC<TrafficTableProps> = ({ sources }) => {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Traffic Sources
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell>Visits</TableCell>
                <TableCell sx={{ width: '30%' }}>Share</TableCell>
                <TableCell>Conv. Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sources.map((source) => (
                <TableRow key={source.source} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{source.source}</TableCell>
                  <TableCell>{source.visits.toLocaleString()}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={source.percentage}
                        sx={{ flex: 1, height: 8, borderRadius: 4 }}
                      />
                      <Typography variant="caption" sx={{ minWidth: 32 }}>
                        {source.percentage}%
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{source.conversionRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
