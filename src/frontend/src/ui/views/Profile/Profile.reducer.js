// @flow

type State = {};

const initialState = {
  fields: {
    Address: {
      addressline1: '',
      addressline2: '',
      postcode: '',
      phone: '',
    },
    Categories: {
      addressline1: '',
      addressline2: '',
      postcode: '',
      phone: '',
    },
    Invoicing: {
      addressline1: '',
      addressline2: '',
      postcode: '',
      phone: '',
    },
    People: {
      addressline1: '',
      addressline2: '',
      postcode: '',
      phone: '',
    },
    Variables: {
      addressline1: '',
      addressline2: '',
      postcode: '',
      phone: '',
    },
  },
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[Profile] SET_FIELD_CONTENT': {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
