import type { SettingsState, SettingsAction } from './types';

export const defaultSettingsState: SettingsState = {
  general: {
    companyName: 'MetricFlow Inc.',
    timezone: 'America/New_York',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY',
  },
  notifications: {
    emailAlerts: true,
    pushNotifications: true,
    weeklyDigest: false,
    monthlyReport: true,
  },
  appearance: {
    theme: 'light',
    accentColor: '#1565C0',
    compactMode: false,
  },
};

export const loadSettings = (): SettingsState => {
  try {
    const stored = localStorage.getItem('metricflow-settings');
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore parse errors
  }
  return defaultSettingsState;
};

export const settingsReducer = (state: SettingsState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'SET_GENERAL':
      return { ...state, general: { ...state.general, ...action.payload } };
    case 'SET_NOTIFICATION_TOGGLE':
      return {
        ...state,
        notifications: { ...state.notifications, [action.payload.key]: action.payload.value },
      };
    case 'SET_THEME':
      return { ...state, appearance: { ...state.appearance, theme: action.payload } };
    case 'SET_ACCENT_COLOR':
      return { ...state, appearance: { ...state.appearance, accentColor: action.payload } };
    case 'SET_COMPACT_MODE':
      return { ...state, appearance: { ...state.appearance, compactMode: action.payload } };
    case 'LOAD_SETTINGS':
      return action.payload;
    default:
      return state;
  }
};
