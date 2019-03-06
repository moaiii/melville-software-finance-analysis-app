import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default ({ data, keys }) => {
  return ((
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy="month"
      margin={{
        top: 50,
        right: 130,
        bottom: 50,
        left: 60,
      }}
      padding={0.3}
      colors="nivo"
      colorBy="id"
      borderColor="inherit:darker(1.6)"
      axisTop={null}
      axisRight={null}
      groupMode="grouped"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'month',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Total (£)',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="inherit:darker(1.6)"
      animate
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  ));
};
