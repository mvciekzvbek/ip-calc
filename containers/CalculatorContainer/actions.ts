import {
  INCREMENT_STEP,
  DECREMENT_STEP 
} from './actionTypes'

export interface StepActionType {
  type: string
  payload?: any
}

export interface StepActionCreator {
  (): StepActionType;
}

export const incrementStep: StepActionCreator = () => {
  return {
    type: INCREMENT_STEP
  }
};

export const decrementStep: StepActionCreator = () => {
   return {
      type: DECREMENT_STEP
   }
};