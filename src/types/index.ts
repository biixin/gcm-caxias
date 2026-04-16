export interface BarDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface LineDataSeries {
  label: string;
  color: string;
  values: number[];
}

export interface LineChartData {
  labels: string[];
  series: LineDataSeries[];
}

export interface PieDataSlice {
  label: string;
  value: number;
  color: string;
}

export interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  content: string;
}
