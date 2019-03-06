// @flow
import { setGraphData } from './Analytics.action';
import { inOutBarGraph, taxYearGraph } from './middleware-functions';

export default {
  '[Analytics] SET_DATE_RANGE': async (store, next, action) => {

  },

  '[Analytics] GET_FORMATTED_GRAPH_DATA': async (store, next, action) => {
    const {
      type, range, context, meta,
    } = action.payload;

    let graphData;

    if (type === 'bar' && context === 'in-out') {
      graphData = inOutBarGraph(range);
    }

    if (type === 'line' && context === 'tax') {
      graphData = taxYearGraph(meta);
    }

    store.dispatch(setGraphData({ ...graphData }));
  },
};
