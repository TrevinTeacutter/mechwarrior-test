'use client';

import React from 'react';

import { BoundedGauge, Gauge } from '@/components/pages/mechlab/panels/gauge';
import {
  selectHeatEfficiency,
  selectHeatCapacity,
  selectHeatDissipation,
  selectAlphaHeat,
  selectAlphaDamage,
  selectBurstDPS,
  selectSustainedDPS,
} from '@/lib/data/mech/variant';
import { useAppSelector } from '@/hooks/use-dispatch';

export const OverviewPanel: React.FC = () => {
  const heatEfficiency = useAppSelector(selectHeatEfficiency);
  const heatCapacity = useAppSelector(selectHeatCapacity);
  const heatDissipation = useAppSelector(selectHeatDissipation);
  const alphaHeat = useAppSelector(selectAlphaHeat);
  const alphaDamage = useAppSelector(selectAlphaDamage);
  const burstDPS = useAppSelector(selectBurstDPS);
  const sustainedDPS = useAppSelector(selectSustainedDPS);

  return (
    <div className="flex flex-col border gap-4 p-2">
      <BoundedGauge metric={heatEfficiency} />
      <Gauge metric={heatCapacity} />
      <Gauge metric={heatDissipation} />
      <BoundedGauge metric={alphaHeat} />
      <Gauge metric={alphaDamage} />
      <Gauge metric={burstDPS} />
      <Gauge metric={sustainedDPS} />
    </div>
  );
};
