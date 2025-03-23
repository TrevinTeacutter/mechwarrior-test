import { HoverCardPortal } from '@radix-ui/react-hover-card';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/select';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/common/hover-card';
import { useAppDispatch } from '@/hooks/use-dispatch';
import { changeVariant } from '@/lib/data/mech/variant';

export function VariantSelect() {
  const dispatch = useAppDispatch();
  const variants = ['Variant1', 'Variant2', 'Variant3', 'Variant4', 'Variant5'];

  return (
    <Select
      defaultValue={variants[0]}
      onValueChange={(value) => dispatch(changeVariant(value))}
      required={true}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {variants.map((variant) => (
          <HoverCard key={variant} openDelay={250} closeDelay={0}>
            <HoverCardTrigger>
              <SelectItem value={variant}>{variant}</SelectItem>
            </HoverCardTrigger>
            <HoverCardPortal>
              <HoverCardContent align="end" side="right" className="HoverCardContent">
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCardPortal>
          </HoverCard>
        ))}
      </SelectContent>
    </Select>
  );
}
