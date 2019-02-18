// @flow

type State = {
  isShown: Boolean,
  calendarData: Array<{
    day: String,
    value: Number,
  }>,
  initialState: String
};

const initialState = {
  isShown: false,
  calendarData: [],
  viewMetric: 'Balance',
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case "[Calendar] SET_IS_SHOWN": {
      return {
        ...state,
        isShown: action.payload
      };
    }

    case "[Calendar] SET_DATA": {
      return {
        ...state,
        calendarData: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
