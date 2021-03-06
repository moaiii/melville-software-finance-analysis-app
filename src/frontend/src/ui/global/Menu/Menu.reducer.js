// @flow

type State = {};

const initialState = {
  currentRoute: '',
  menuIsVisible: true,
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[Menu] CHANGE_ROUTE': {
      return {
        ...state,
        currentRoute: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
