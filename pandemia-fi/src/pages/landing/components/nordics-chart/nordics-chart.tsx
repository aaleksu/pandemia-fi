import React from "react";
import Chart from "react-apexcharts";
import chartOptions from "./chart-options";
import nordicsTimeSeries from "./nordics-time-series.json";

interface NordicsChartProps {
  scale: ChartScaleType;
}

const chartOptionsByScale = {
  linear: {
    ...chartOptions,
    yaxis: {
      ...chartOptions.yaxis,
      logarithmic: false,
      min: 9
    }
  },
  logarithmic: {
    ...chartOptions
  }
};

const NordicsChart = ({ scale }: NordicsChartProps) => {
  return (
    <Chart
      options={chartOptionsByScale[scale]}
      series={nordicsTimeSeries}
      type="line"
    />
  );
};

export default NordicsChart;
