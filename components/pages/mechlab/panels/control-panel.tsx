'use client';

import React from 'react';
import { SquarePen, Trash2 } from 'lucide-react';

import { useAppSelector } from '@/hooks/use-dispatch';
import { selectClass, selectFaction, selectTonnage } from '@/lib/data/mech/variant';
import { Button } from '@/components/common/button';
import { VariantSelect } from '@/components/pages/mechlab/panels/variant-select';
import { ModelSelect } from '@/components/pages/mechlab/panels/model-select';

export const ControlPanel: React.FC = () => {
  const mechClass = useAppSelector(selectClass);
  const tonnage = useAppSelector(selectTonnage);
  const faction = useAppSelector(selectFaction);
  const labelClass = 'text-lg capitalize align-bottom border px-4';

  return (
    <div className="grid grid-cols-5">
      <div className="flex grow flex-col border">
        <span className={labelClass}>mech</span>
        <ModelSelect />
      </div>
      <div className="flex grow flex-col border">
        <span className={labelClass}>variant</span>
        <div className="flex grow flex-row justify-between m-1 gap-2">
          <VariantSelect />
          <div className="flex grow flex-row justify-end place-items-center gap-2">
            <Button variant="outline">
              <SquarePen className="w-20 h-20" />
            </Button>
            <Button variant="destructive" className="m-0">
              <Trash2 className="w-20 h-20" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col border">
        <span className={labelClass}>faction</span>
        <span className="text-lg capitalize align-top text-center px-4">{faction}</span>
      </div>
      <div className="flex grow flex-col border">
        <span className={labelClass}>class</span>
        <span className="text-lg capitalize align-top text-center px-4">{mechClass}</span>
      </div>
      <div className="flex grow flex-col border">
        <span className={labelClass}>tonnage</span>
        <span className="text-lg capitalize align-top text-center px-4">{tonnage.value}</span>
      </div>
    </div>
  );
};
