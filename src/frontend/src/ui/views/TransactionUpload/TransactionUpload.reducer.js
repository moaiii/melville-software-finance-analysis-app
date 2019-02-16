// @flow
import { createNetworkReducer, networkReducerInitialState } from '../../../lib/redux';
import {default as types} from './Transaction.types';

const _fd = require('lodash.flattendeep');

const additionalState = {};
const initialState = networkReducerInitialState(additionalState);

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  const functions = Object
    .values(types)
    .map(type => createNetworkReducer(type, payload));

  const reducerFunctions = {}

  functions.forEach(funct => {
    Object.assign(reducerFunctions, reducerFunctions, {
      ...funct
    });
  });

  return state
};
