import React from 'react';

import { SectionPanel } from '@/components/pages/mechlab/panels/section-panel';

export function SectionsPanel() {
  return (
    <div className="grid grid-rows-5">
      <div className="row-span-2 row-end-3 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-start-2 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-start-2 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-start-2 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-end-3 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-end-5 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-end-6 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-end-6 flex flex-col gap-2" />
      <div className="row-span-2 row-end-6 flex flex-col border gap-2">
        <SectionPanel />
      </div>
      <div className="row-span-2 row-end-5 flex flex-col border gap-2">
        <SectionPanel />
      </div>
    </div>
  );
}
