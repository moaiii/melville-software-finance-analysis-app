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
    Categories: [
      {
        key: '',
        label: '',
        value: '',
        type: '',
        meta: {},
      }
    ],
    Invoicing: {
      comments: '',
      payableTo: '',
      accountNum: '',
      sortCode: '',
    },
    People: [
      {
        key: '',
        label: '',
        value: '',
        type: '',
        meta: {},
      }
    ],
    Variables: [
      {
        key: '',
        label: '',
        value: '',
        type: '',
        meta: {},
      }
    ],
  },
  network: {
    pending: false,
    resolved: false,
    error: false,
  },
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[Profile] GET_PROFILE_CONTENT__SUBMIT': {
      return {
        ...state,
        network: {
          pending: true,
          resolved: false,
          error: false,
        }
      };
    }
    case '[Profile] GET_PROFILE_CONTENT__RESOLVED': {
      return {
        ...state,
        network: {
          pending: false,
          resolved: true,
          error: false,
        }
      };
    }
    case '[Profile] GET_PROFILE_CONTENT__ERROR': {
      return {
        ...state,
        network: {
          pending: false,
          resolved: false,
          error: true,
        }
      };
    }
    case '[Profile] SET_PROFILE_CONTENT': { // TODO: both these reducer actions are the same
      return {
        ...state,
        fields: action.payload,
      };
    }
    case '[Profile] SET_FIELD_CONTENT': { // TODO: both these reducer actions are the same
      return {
        ...state,
        fields: action.payload,
      };
    }
    case '[Profile] ADD_FIELD': {
      const { subCategory } = action.payload;
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          [`${subCategory}`]: [
            ...state.fields[`${subCategory}`],
            {
              key: '',
              label: '',
              value: '',
              type: '',
              meta: {},
            }
          ]
        })
      };
    }
    case '[Profile] REMOVE_FIELD': {
      const { index, subCategory } = action.payload;
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          [`${action.payload.subCategory}`]: [
            ...state.fields[`${subCategory}`].slice(0, index),
            ...state.fields[`${subCategory}`].slice(index + 1)]
        })
      };
    }

    default: {
      return state;
    }
  }
};
