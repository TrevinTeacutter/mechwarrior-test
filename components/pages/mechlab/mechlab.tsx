'use client';

import React from 'react';

import { OverviewPanel } from '@/components/pages/mechlab/panels/overview-panel';
import { ControlPanel } from '@/components/pages/mechlab/panels/control-panel';
import { decrement, increment } from '@/lib/data/mech/variant';
import { Button } from '@/components/common/button';
import { useAppDispatch } from '@/hooks/use-dispatch';
import { SectionsPanel } from '@/components/pages/mechlab/panels/sections-panel';

export const Mechlab: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-screen h-screen">
      <ControlPanel></ControlPanel>
      <div className="grid grid-cols-4 w-screen h-screen border">
        <div className="flex flex-col border">
          <div className="grid grid-flow-col-dense border gap-4">
            <Button onClick={() => dispatch(increment())}>Increment State</Button>
            <Button onClick={() => dispatch(decrement())}>Decrement State</Button>
          </div>
          <OverviewPanel></OverviewPanel>
        </div>
        <div className="col-span-3 border">
          <SectionsPanel />
        </div>
      </div>
    </div>
  );
};
