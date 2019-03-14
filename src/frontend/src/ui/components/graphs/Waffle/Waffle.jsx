import React from 'react';
import { ResponsiveWaffle } from '@nivo/waffle';

export default ({ data, keys }) => {
  return (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{
        top: 10,
        right: 10,
        bottom: 10,
        left: 120,
      }}
      colorBy="id"
      borderColor="inherit:darker(0.3)"
      animate
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          itemTextColor: '#777',
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
                itemBackground: '#f7fafb',
              },
            },
          ],
        },
      ]}
    />
  );
};
