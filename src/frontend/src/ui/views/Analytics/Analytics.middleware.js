// @flow
import { setGraphData } from './Analytics.action';
import {
  inOutBarGraph,
  taxYearGraph,
  earningsPerPersonPie,
  expensesByCategoryPie,
  highLevelOverviewBar,
} from './middleware-functions';

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
    if (type === 'pie' && context === 'earnings') {
      graphData = earningsPerPersonPie(meta);
    }
    if (type === 'pie' && context === 'expenses') {
      graphData = expensesByCategoryPie(meta);
    }
    if (type === 'bar' && context === 'high-level-overview') {
      graphData = highLevelOverviewBar(meta);
    }

    if (graphData) {
      store.dispatch(setGraphData({ ...graphData }));
    } else {
      throw new Error(
        `No graph data could be generated from the analytics options selected. \n
          type: ${type}, \nrange: ${range}, \ncontext: ${context}`
      );
    }
  },
};
