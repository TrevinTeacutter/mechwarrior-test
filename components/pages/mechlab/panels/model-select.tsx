import { HoverCardPortal } from '@radix-ui/react-hover-card';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/common/select';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/common/hover-card';
import { changeModel } from '@/lib/data/mech/variant';
import { useAppDispatch } from '@/hooks/use-dispatch';

export function ModelSelect() {
  const dispatch = useAppDispatch();
  const models = new Map<string, string[]>([
    ['Ghost Bear', ['Nova NVA-1GB', 'Viper VPR-1GB']],
    ["Hell's Horses", ['Nova NVA-1HH']],
    ['Ice Hellion', ['Viper VPR-1IH']],
  ]);
  const defaultModel = models.values().next()?.value?.[0];

  return (
    <Select
      defaultValue={defaultModel}
      onValueChange={(value) => dispatch(changeModel(value))}
      required={true}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <FactionGroup faction={'Ghost Bear'} models={models.get('Ghost Bear')} />
        {models.keys().map((key) => (
          <FactionGroup key={key} faction={key} models={models.get(key)} />
        ))}
      </SelectContent>
    </Select>
  );
}

export function FactionGroup({
  faction,
  models,
}: {
  faction: string;
  models: string[] | undefined;
}) {
  if (!models) return undefined;

  return (
    <SelectGroup>
      <SelectLabel>{faction}</SelectLabel>
      {models?.map((model) => (
        <HoverCard key={model} openDelay={250} closeDelay={0}>
          <HoverCardTrigger>
            <SelectItem value={model}>{model}</SelectItem>
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent align="end" side="right" className="HoverCardContent">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCard>
      ))}
    </SelectGroup>
  );
}
