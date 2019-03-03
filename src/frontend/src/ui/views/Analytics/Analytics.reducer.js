// @flow
import { getShortToday } from '../../../lib/utils';

type State = {};

const initialState = {
  dateRange: ['2018-01-01', getShortToday()], // [from, to]
  graphData: null,
  graphKeys: [],
};

export default (state: State = initialState, action): State => {
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

    default: {
      return state;
    }
  }
};
