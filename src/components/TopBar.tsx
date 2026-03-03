import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import type { TopBarProps } from './types';
import { NotificationPopover } from './NotificationPopover';
import { notifications } from '../data';

/** Top application bar with date range, notifications, and user menu */
export const TopBar: React.FC<TopBarProps> = ({ pageTitle, dateRange, onDateRangeChange }) => {
  const [notifAnchorEl, setNotifAnchorEl] = useState<HTMLElement | null>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleNotificationBellClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotificationPopoverClose = () => {
    setNotifAnchorEl(null);
  };

  const handleUserAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
          {pageTitle}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <TextField
            type="date"
            size="small"
            value={dateRange.start}
            onChange={(e) => onDateRangeChange(e.target.value, dateRange.end)}
            sx={{ width: 160 }}
          />
          <Typography variant="body2" color="text.secondary">to</Typography>
          <TextField
            type="date"
            size="small"
            value={dateRange.end}
            onChange={(e) => onDateRangeChange(dateRange.start, e.target.value)}
            sx={{ width: 160 }}
          />
        </Box>

        <IconButton onClick={handleNotificationBellClick}>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <NotificationPopover
          anchorEl={notifAnchorEl}
          notifications={notifications}
          onClose={handleNotificationPopoverClose}
        />

        <IconButton onClick={handleUserAvatarClick} sx={{ p: 0 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 14 }}>JD</Avatar>
        </IconButton>

        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleUserMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleUserMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
