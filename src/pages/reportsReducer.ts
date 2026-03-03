import type { ReportsState, ReportsAction } from './types';

export const initialReportsState: ReportsState = {
  generatingId: null,
  generatedIds: [],
};

export const reportsReducer = (state: ReportsState, action: ReportsAction): ReportsState => {
  switch (action.type) {
    case 'START_GENERATE':
      return { ...state, generatingId: action.payload };
    case 'FINISH_GENERATE':
      return {
        ...state,
        generatingId: null,
        generatedIds: [...state.generatedIds, action.payload],
      };
    default:
      return state;
  }
};
