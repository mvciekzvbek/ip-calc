import { StepActionCreator } from './containers/CalculatorContainer/actions';

export type CalculatorProps = {
    step: number,
    mode: string,
    decrementStep: StepActionCreator,
    incrementStep: StepActionCreator
  }
  