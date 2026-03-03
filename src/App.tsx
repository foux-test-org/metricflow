import React, { useState, useCallback, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import dayjs from 'dayjs';
import { Sidebar, TopBar } from './components';
import { Dashboard, Analytics, Customers, Reports, Settings } from './pages';
import { lightTheme, darkTheme } from './theme';
import { loadSettings } from './pages/settingsReducer';

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  analytics: 'Analytics',
  customers: 'Customers',
  reports: 'Reports',
  settings: 'Settings',
};

/** Root application component with layout, navigation, and theme switching */
export const App: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(loadSettings().appearance.theme);
  const [dateRange, setDateRange] = useState({
    start: dayjs().subtract(30, 'day').format('YYYY-MM-DD'),
    end: dayjs().format('YYYY-MM-DD'),
  });

  const theme = useMemo(() => (themeMode === 'dark' ? darkTheme : lightTheme), [themeMode]);

  const handleNavigate = useCallback((page: string) => {
    setActivePage(page);
  }, []);

  const handleToggleSidebarCollapse = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  const handleDateRangeChange = useCallback((start: string, end: string) => {
    setDateRange({ start, end });
  }, []);

  const handleThemeChange = useCallback((newTheme: 'light' | 'dark') => {
    setThemeMode(newTheme);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'customers':
        return <Customers />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings onThemeChange={handleThemeChange} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar
          activePage={activePage}
          collapsed={sidebarCollapsed}
          onNavigate={handleNavigate}
          onToggleCollapse={handleToggleSidebarCollapse}
        />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <TopBar
            pageTitle={pageTitles[activePage] ?? 'Dashboard'}
            dateRange={dateRange}
            onDateRangeChange={handleDateRangeChange}
          />
          <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
            {renderPage()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
