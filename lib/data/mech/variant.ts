import { type PayloadAction } from '@reduxjs/toolkit';

import { BoundedMetric, Metric } from '@/lib/data/metric';
import { createAppSlice } from '@/app/createAppSlice';

import { Section } from './section';

export interface Variant {
  name: string;
  chassis: string;
  model: string;
  faction: string;
  class: string;
  sections: Section[];
  tonnage: BoundedMetric;
  heatEfficiency: BoundedMetric;
  heatCapacity: Metric;
  heatDissipation: Metric;
  alphaHeat: BoundedMetric;
  alphaDamage: Metric;
  burstDPS: Metric;
  sustainedDPS: Metric;
}

const emptyVariant: Variant = {
  name: '',
  chassis: '',
  model: '',
  faction: '',
  class: '',
  sections: [],
  tonnage: { name: 'Tonnage', value: 0, minimum: 0, maximum: 100 },
  heatEfficiency: { name: 'Heat Efficiency', value: 0, minimum: 0, maximum: 100 },
  heatCapacity: { name: 'Heat Capacity', value: 0 },
  heatDissipation: { name: 'Heat Dissipation', value: 0 },
  alphaHeat: { name: 'Alpha Heat', value: 0, minimum: 0, maximum: 100 },
  alphaDamage: { name: 'Alpha Damage', value: 0 },
  burstDPS: { name: 'Burst DPS', value: 0 },
  sustainedDPS: { name: 'Sustained DPS', value: 0 },
};

export const variantSlice = createAppSlice({
  name: 'variant',
  initialState: emptyVariant,
  reducers: {
    increment: (state) => {
      state.tonnage.value += 10;
    },
    decrement: (state) => {
      state.tonnage.value -= 10;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.tonnage.value += action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.tonnage.value -= action.payload;
    },
    changeModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeVariant: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectName: (variant) => variant.name,
    selectChassis: (variant) => variant.chassis,
    selectModel: (variant) => variant.model,
    selectFaction: (variant) => variant.faction,
    selectClass: (variant) => variant.class,
    selectTonnage: (variant) => variant.tonnage,
    selectHeatEfficiency: (variant) => variant.heatEfficiency,
    selectHeatCapacity: (variant) => variant.heatCapacity,
    selectHeatDissipation: (variant) => variant.heatDissipation,
    selectAlphaHeat: (variant) => variant.alphaHeat,
    selectAlphaDamage: (variant) => variant.alphaDamage,
    selectBurstDPS: (variant) => variant.burstDPS,
    selectSustainedDPS: (variant) => variant.sustainedDPS,
  },
});

// Export the generated action creators for use in components
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  changeModel,
  changeVariant,
} = variantSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectName,
  selectChassis,
  selectFaction,
  selectModel,
  selectClass,
  selectTonnage,
  selectHeatEfficiency,
  selectHeatCapacity,
  selectHeatDissipation,
  selectAlphaHeat,
  selectAlphaDamage,
  selectBurstDPS,
  selectSustainedDPS,
} = variantSlice.selectors;

// Export the slice reducer for use in the store configuration
export default variantSlice.reducer;
