import React from 'react';
import { Popover, List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';
import type { NotificationPopoverProps } from './types';

/** Displays a list of notifications in a popover */
export const NotificationPopover: React.FC<NotificationPopoverProps> = ({ anchorEl, notifications, onClose }) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Box sx={{ width: 360, maxHeight: 400 }}>
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Notifications</Typography>
        </Box>
        <Divider />
        <List disablePadding>
          {notifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <ListItem sx={{ px: 2, py: 1.5, bgcolor: notification.read ? 'transparent' : 'action.hover' }}>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: notification.read ? 400 : 600 }}>
                      {notification.title}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                        {notification.message}
                      </Typography>
                      <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>
                        {notification.timestamp}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              {index < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Popover>
  );
};
