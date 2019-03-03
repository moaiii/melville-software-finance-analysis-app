// @flow
import { setGraphData } from './Analytics.action';
import { groupByDate } from '../../../lib/utils';
import { inOutBarGraph } from './middleware-functions';

export default {
  '[Analytics] SET_DATE_RANGE': async (store, next, action) => {

  },

  '[Analytics] GET_FORMATTED_GRAPH_DATA': async (store, next, action) => {
    const { type, range, context } = action.payload;

    let graphData;

    if (type === 'bar' && context === 'in-out') {
      graphData = inOutBarGraph(range);
    }

    store.dispatch(setGraphData({ ...graphData }));
  },
};
