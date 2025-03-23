'use client';

import React from 'react';

import { Progress } from '@/components/common/progress';
import { BoundedMetric, Metric } from '@/lib/data/metric';

interface BoundedGaugeProps {
  metric: BoundedMetric;
}

export function BoundedGauge({ metric }: BoundedGaugeProps) {
  return (
    <div className="flex flex-col border p-2 gap-2">
      <Gauge metric={metric} />
      <Progress value={((metric.value - metric.minimum) * 100) / metric.maximum} />
    </div>
  );
}

interface GaugeProps {
  metric: Metric;
}

export function Gauge({ metric }: GaugeProps) {
  return (
    <div className="grid grid-cols-2 border">
      <span className="text-md capitalize text-left border px-4">{metric.name}</span>
      <span className="text-lg capitalize text-left px-4">{metric.value}</span>
    </div>
  );
}
