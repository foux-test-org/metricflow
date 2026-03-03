import React, { useReducer, useCallback, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import { settingsReducer, loadSettings } from './settingsReducer';

interface SettingsPageProps {
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const accentColors = ['#1565C0', '#00897B', '#7B1FA2', '#E65100'] as const;

/** Settings page with General, Notifications, and Appearance tabs */
export const Settings: React.FC<SettingsPageProps> = ({ onThemeChange }) => {
  const [state, dispatch] = useReducer(settingsReducer, loadSettings());
  const [activeTab, setActiveTab] = React.useState(0);

  useEffect(() => {
    onThemeChange(state.appearance.theme);
  }, [state.appearance.theme, onThemeChange]);

  const handleTabChange = useCallback((_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  }, []);

  const handleSaveSettings = useCallback(() => {
    localStorage.setItem('metricflow-settings', JSON.stringify(state));
  }, [state]);

  return (
    <Box>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="General" />
            <Tab label="Notifications" />
            <Tab label="Appearance" />
          </Tabs>

          {activeTab === 0 && (
            <Stack spacing={3} sx={{ maxWidth: 500 }}>
              <TextField
                label="Company Name"
                fullWidth
                value={state.general.companyName}
                onChange={(e) => dispatch({ type: 'SET_GENERAL', payload: { companyName: e.target.value } })}
              />
              <FormControl fullWidth>
                <InputLabel>Timezone</InputLabel>
                <Select
                  value={state.general.timezone}
                  label="Timezone"
                  onChange={(e) => dispatch({ type: 'SET_GENERAL', payload: { timezone: e.target.value } })}
                >
                  <MenuItem value="America/New_York">Eastern Time (ET)</MenuItem>
                  <MenuItem value="America/Chicago">Central Time (CT)</MenuItem>
                  <MenuItem value="America/Denver">Mountain Time (MT)</MenuItem>
                  <MenuItem value="America/Los_Angeles">Pacific Time (PT)</MenuItem>
                  <MenuItem value="UTC">UTC</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                  value={state.general.currency}
                  label="Currency"
                  onChange={(e) => dispatch({ type: 'SET_GENERAL', payload: { currency: e.target.value } })}
                >
                  <MenuItem value="USD">USD ($)</MenuItem>
                  <MenuItem value="EUR">EUR (&euro;)</MenuItem>
                  <MenuItem value="GBP">GBP (&pound;)</MenuItem>
                  <MenuItem value="JPY">JPY (&yen;)</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Date Format</InputLabel>
                <Select
                  value={state.general.dateFormat}
                  label="Date Format"
                  onChange={(e) => dispatch({ type: 'SET_GENERAL', payload: { dateFormat: e.target.value } })}
                >
                  <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                  <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                  <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          )}

          {activeTab === 1 && (
            <Stack spacing={2} sx={{ maxWidth: 400 }}>
              {(
                [
                  { key: 'emailAlerts', label: 'Email Alerts' },
                  { key: 'pushNotifications', label: 'Push Notifications' },
                  { key: 'weeklyDigest', label: 'Weekly Digest' },
                  { key: 'monthlyReport', label: 'Monthly Report' },
                ] as const
              ).map((item) => (
                <FormControlLabel
                  key={item.key}
                  control={
                    <Switch
                      checked={state.notifications[item.key]}
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_NOTIFICATION_TOGGLE',
                          payload: { key: item.key, value: e.target.checked },
                        })
                      }
                    />
                  }
                  label={item.label}
                />
              ))}
            </Stack>
          )}

          {activeTab === 2 && (
            <Stack spacing={3} sx={{ maxWidth: 400 }}>
              <Box>
                <FormLabel>Theme</FormLabel>
                <RadioGroup
                  row
                  value={state.appearance.theme}
                  onChange={(e) => dispatch({ type: 'SET_THEME', payload: e.target.value as 'light' | 'dark' })}
                >
                  <FormControlLabel value="light" control={<Radio />} label="Light" />
                  <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                </RadioGroup>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Accent Color
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {accentColors.map((color) => (
                    <Box
                      key={color}
                      onClick={() => dispatch({ type: 'SET_ACCENT_COLOR', payload: color })}
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: color,
                        cursor: 'pointer',
                        border: state.appearance.accentColor === color ? '3px solid' : '2px solid transparent',
                        borderColor: state.appearance.accentColor === color ? 'text.primary' : 'transparent',
                        transition: 'border-color 0.2s',
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={state.appearance.compactMode}
                    onChange={(e) => dispatch({ type: 'SET_COMPACT_MODE', payload: e.target.checked })}
                  />
                }
                label="Compact Mode"
              />
            </Stack>
          )}

          <Box sx={{ mt: 4 }}>
            <Button variant="contained" onClick={handleSaveSettings}>
              Save Settings
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
