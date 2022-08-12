import React from 'react';
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianGridProps,
  XAxisProps,
  YAxisProps,
  Bar,
  BarProps,
  Tooltip,
  TooltipProps,
} from 'recharts';
import AutoSizer from 'react-virtualized-auto-sizer';

interface Proptypes {
  containerOptions?: Omit<React.ComponentProps<typeof AutoSizer>, 'children'>;
  xOptions?: XAxisProps;
  yOptions?: YAxisProps;
  graphOptions?: Omit<BarProps, 'dataKey'>[];
  cartesianGridOptions?: CartesianGridProps;
  data?: { [key: string | number]: number | string }[];
  dataKeys?: string[];
  xKey?: string;
  chartOptions?: React.ComponentProps<typeof BarChart>;
  children?: React.ReactNode;
  height?: number;
  tooltipOptions?: TooltipProps<number, string>;
}

const BarGraph: React.FC<Proptypes> = ({
  containerOptions,
  xOptions,
  yOptions,
  cartesianGridOptions,
  data,
  dataKeys,
  xKey,
  chartOptions,
  graphOptions,
  children,
  height,
  tooltipOptions,
}) => {
  return (
    <AutoSizer
      style={{
        height,
      }}
      {...containerOptions}
    >
      {({ width, height }) => (
        <BarChart
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          data={data}
          height={height}
          width={width}
          style={{
            cursor: 'grab',
          }}
          {...chartOptions}
        >
          <CartesianGrid
            opacity={0.4}
            strokeWidth={1.4}
            {...(cartesianGridOptions as any)}
          />
          {children}
          {dataKeys?.map((item, index) => (
            <Bar
              dataKey={item}
              fill={'#0066CC'}
              {...(graphOptions?.[index] as any)}
            />
          ))}
          <YAxis width={28} {...yOptions} />
          <XAxis dataKey={xKey} {...xOptions} fillOpacity={1} />

          <Tooltip
            cursor={{ fill: 'transparent' }}
            wrapperStyle={{
              border: 'none',
              outline: 'none',
            }}
            {...tooltipOptions}
          />
        </BarChart>
      )}
    </AutoSizer>
  );
};

export default BarGraph;
