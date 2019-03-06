// @flow
import { getShortToday } from '../../../lib/utils';

const initialState = {
  dateRange: ['2018-01-01', getShortToday()], // [from, to]
  graphData: null,
  graphKeys: [],
  basicSalaryCap: 8424,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case '[Analytics] SET_DATE_RANGE': {
      return {
        ...state,
        dateRange: action.payload,
      };
    }

    case '[Analytics] SET_GRAPH_DATA': {
      return {
        ...state,
        graphData: action.payload.data,
        graphKeys: action.payload.keys,
      };
    }

    case '[Analytics] SET_BASIC_SALARY_CAP': {
      return {
        ...state,
        basicSalaryCap: action.payload.basicSalaryCap,
      };
    }

    default: {
      return state;
    }
  }
};
