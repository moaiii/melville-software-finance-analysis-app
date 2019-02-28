// @flow
type State = {};

const initialState = {
  isOpen: false,
  title: 'Logging in',
  subtitle: 'This may take a few seconds',
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[Spinner] OPEN': {
      return {
        ...state,
        isOpen: true,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
      };
    }

    case '[Spinner] CLOSE': {
      return {
        ...state,
        isOpen: false,
        title: '',
        subtitle: '',
      };
    }

    default: {
      return state;
    }
  }
};
