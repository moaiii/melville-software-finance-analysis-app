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
        type: 'text',
        meta: {},
      },
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
      },
    ],
    Variables: [
      {
        key: '',
        label: '',
        value: '',
        type: '',
        meta: {},
      },
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
        },
      };
    }
    case '[Profile] GET_PROFILE_CONTENT__ERROR': {
      return {
        ...state,
        network: {
          pending: false,
          resolved: false,
          error: true,
        },
      };
    }
    case '[Profile] SET_PROFILE_CONTENT': {
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          Address: action.payload.Address,
          Categories: action.payload.Categories,
          People: action.payload.People,
          Invoicing: action.payload.Invoicing,
          Variables: action.payload.Variables,
        }),
      };
    }
    case '[Profile] SET_FIELD_CONTENT': {
      return {
        ...state,
        fields: action.payload,
      };
    }
    case '[Profile] ADD_FIELD': {
      const subCategory = action.payload;

      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          [`${subCategory}`]: [
            ...state.fields[`${subCategory}`],
            {
              key: `${state.fields[subCategory].length}-${subCategory}`,
              label: '',
              value: '',
              type: 'text',
              meta: {},
            },
          ],
        }),
      };
    }
    case '[Profile] REMOVE_FIELD': { debugger;
      const { index, subCategory } = action.payload;
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          [`${action.payload.subCategory}`]: [
            ...state.fields[`${subCategory}`].slice(0, index),
            ...state.fields[`${subCategory}`].slice(index + 1)],
        }),
      };
    }

    default: {
      return state;
    }
  }
};
