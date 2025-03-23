import React from 'react';

import { HardpointPanel } from '@/components/pages/mechlab/panels/hardpoint-panel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/card';

export function SectionPanel() {
  return (
    <Card className="place-items-center space-y-2">
      <CardHeader>
        <CardTitle>Section X</CardTitle>
      </CardHeader>
      <CardContent>
        <HardpointPanel />
        <HardpointPanel />
      </CardContent>
    </Card>
  );
}
