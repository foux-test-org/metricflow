import type { AnalyticsState, AnalyticsAction } from './types';

export const initialAnalyticsState: AnalyticsState = {
  chartType: 'bar',
};

export const analyticsReducer = (state: AnalyticsState, action: AnalyticsAction): AnalyticsState => {
  switch (action.type) {
    case 'SET_CHART_TYPE':
      return { ...state, chartType: action.payload };
    default:
      return state;
  }
};
