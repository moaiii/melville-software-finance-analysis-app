// @flow
import * as React from "react";

import { ResponsiveCalendar } from '@nivo/calendar'

type Props = {};
type State = {};

export default class Calendar extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount(): void {
    this.props.setCalendarDataValues();
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return !!nextProps.calendarData;
  };

  render(): React.Element<"div"> {
    
    const { calendarData } = this.props;
    // const { } = this.state;

    if (calendarData && calendarData.length !== 0) {
      return (
        <div className={`Calendar`}>
          <ResponsiveCalendar
            data={calendarData}
            from="2018-03-01"
            to="2019-07-12"
            emptyColor="#eeeeee"
            colors={[
              "#f47560",
              "#e8c1a0",
              "#97e3d5",
              "#61cdbb",
            ]}
            margin={{
              "top": 100,
              "right": 30,
              "bottom": 60,
              "left": 30
            }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            monthLegendOffset={10}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                  "anchor": "bottom-right",
                  "direction": "row",
                  "translateY": 36,
                  "itemCount": 4,
                  "itemWidth": 34,
                  "itemHeight": 36,
                  "itemDirection": "top-to-bottom"
                }
            ]}
          />
        </div>
      );
    }

    return null;
  }
}
