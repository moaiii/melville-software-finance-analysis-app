// @flow

type State = {};

let initialState = {};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case "[Auth] AN_EXAMPLE_ACTION_TYPE": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
