export type Metric = {
  name: string;
  value: number;
};

export type BoundedMetric = {
  name: string;
  value: number;
  maximum: number;
  minimum: number;
};
