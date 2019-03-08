// @flow
import { getShortToday } from '../../../lib/utils';

type State = {};

const initialState = {
  isOpen: false,
  dateRange: ['2018-01-01', getShortToday()], // [from, to],
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[DateRangeToast] OPEN_DATE_RANGE_TOAST': {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }

    case '[DateRangeToast] SET_DATE_RANGE': {
      return {
        ...state,
        dateRange: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
