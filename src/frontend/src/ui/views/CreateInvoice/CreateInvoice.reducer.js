// @flow
import { getShortToday, addDays } from '../../../lib/utils';

type State = {};

const today = getShortToday();
const plus30days = addDays(today, 30);

const initialState = {
  fields: {
    submissionDate: today,
    dueDate: plus30days,
    total: 0,
    recipientName: '',
    project: '',
    vat: 0,
    id: '1',
    recipientAddress: '',
    recipientEmail: '',
    items: [
      {
        unitPrice: 0,
        description: '',
        quantity: 0,
        totalPrice: 0,
      },
    ],
    reference: '',
    paid: false,
  },
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[CreateInvoice] SET_FIELD': {
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          [`${action.payload.key}`]: action.payload.value,
        }),
      };
    }
    case '[CreateInvoice] ADD_BILLABLE_ITEM': {
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          items: [
            ...state.fields.items,
            {
              unitPrice: 0,
              description: '',
              quantity: 0,
              totalPrice: 0,
            },
          ],
        }),
      };
    }
    case '[CreateInvoice] REMOVE_BILLABLE_ITEM': {
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          items: state.fields.items
            .splice(action.payload - 1, 1),
        }),
      };
    }
    case '[CreateInvoice] SET_BILLABLE_ITEM_FIELD': {
      return {
        ...state,
        fields: Object.assign({}, state.fields, {
          items: action.payload,
        }),
      };
    }

    default: {
      return state;
    }
  }
};
