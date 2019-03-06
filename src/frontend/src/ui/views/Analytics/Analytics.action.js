// @flow
import { actionCreator, networkActionCreator } from '../../../lib/redux';

export const setDateRange
  = actionCreator('[Analytics] SET_DATE_RANGE');

export const getFormattedGraphData
  = actionCreator('[Analytics] GET_FORMATTED_GRAPH_DATA');

export const setGraphData
  = actionCreator('[Analytics] SET_GRAPH_DATA');

export const setBasicSalaryCap
  = actionCreator('[Analytics] SET_BASIC_SALARY_CAP');
