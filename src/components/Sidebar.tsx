import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import type { SidebarProps } from './types';

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, key: 'dashboard' },
  { label: 'Analytics', icon: <BarChartIcon />, key: 'analytics' },
  { label: 'Customers', icon: <PeopleIcon />, key: 'customers' },
  { label: 'Reports', icon: <DescriptionIcon />, key: 'reports' },
  { label: 'Settings', icon: <SettingsIcon />, key: 'settings' },
] as const;

/** Sidebar navigation with collapsible icon-only mode */
export const Sidebar: React.FC<SidebarProps> = ({ activePage, collapsed, onNavigate, onToggleCollapse }) => {
  const width = collapsed ? 64 : 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          transition: 'width 0.2s ease-in-out',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', whiteSpace: 'nowrap' }}>
          {collapsed ? 'MF' : 'MetricFlow'}
        </Typography>
      </Box>

      <Divider />

      <List sx={{ flex: 1, pt: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.key}
            selected={activePage === item.key}
            onClick={() => onNavigate(item.key)}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 0.5,
              justifyContent: collapsed ? 'center' : 'flex-start',
              px: collapsed ? 1 : 2,
            }}
          >
            <ListItemIcon sx={{ minWidth: collapsed ? 0 : 40, justifyContent: 'center' }}>
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.label} />}
          </ListItemButton>
        ))}
      </List>

      <Divider />

      {!collapsed && (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 14 }}>JD</Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>Jane Doe</Typography>
            <Typography variant="caption" color="text.secondary">Admin</Typography>
          </Box>
        </Box>
      )}
      {collapsed && (
        <Box sx={{ p: 1, display: 'flex', justifyContent: 'center', pb: 2 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 14 }}>JD</Avatar>
        </Box>
      )}

      <Divider />

      <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
        <IconButton onClick={onToggleCollapse} size="small">
          {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
    </Drawer>
  );
};
