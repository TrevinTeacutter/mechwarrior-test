import { EquipmentSelect } from '@/components/pages/mechlab/panels/equipment-select';

export function HardpointPanel() {
  return (
    <div className="flex flex-row items-center border">
      <span className="border text-center">2</span>
      <div className="grid grid-flow-row">
        <div className="border">
          <EquipmentSelect />
        </div>
        <div className="border">
          <EquipmentSelect />
        </div>
        <div className="border">
          <EquipmentSelect />
        </div>
        <div className="border">
          <EquipmentSelect />
        </div>
        <div className="border">
          <EquipmentSelect />
        </div>
      </div>
    </div>
  );
}
