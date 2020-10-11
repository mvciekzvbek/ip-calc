import {
   INCREMENT_STEP,
   DECREMENT_STEP 
} from './actionTypes'

export const incrementStep = () => {
   console.log('increment');
   return {
      type: INCREMENT_STEP
   }
};

export const decrementStep = () => {
   console.log('decrement');
   return {
      type: DECREMENT_STEP
   }
};