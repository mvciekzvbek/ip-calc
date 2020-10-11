import { createSelector } from 'reselect'

export const stepSelector = state => state.calculator.step;
export const modeSelector = state => state.calculator.mode;