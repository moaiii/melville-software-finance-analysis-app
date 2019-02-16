// @flow
import { networkActionCreator } from '../../../lib/redux';
import {default as types} from './Transaction.types';

export const uploadCSV = networkActionCreator(types.uploadCSV);
export const somethingElse = networkActionCreator(types.somethingElse);
