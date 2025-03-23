import { HoverCardPortal } from '@radix-ui/react-hover-card';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/common/hover-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/select';

export function EquipmentSelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="-empty-" />
      </SelectTrigger>
      <SelectContent>
        <HoverCard openDelay={250} closeDelay={0}>
          <HoverCardTrigger>
            <SelectItem value="lppc">Light PPC</SelectItem>
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent align="end" side="right" className="HoverCardContent">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCard>
        <HoverCard openDelay={250} closeDelay={0}>
          <HoverCardTrigger>
            <SelectItem value="ppc">PPC</SelectItem>
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent align="end" side="right" className="HoverCardContent">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCard>
        <HoverCard openDelay={250} closeDelay={0}>
          <HoverCardTrigger>
            <SelectItem value="hppc">Heavy PPC</SelectItem>
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent align="end" side="right" className="HoverCardContent">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCard>
      </SelectContent>
    </Select>
  );
}
