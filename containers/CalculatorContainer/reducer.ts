import { DECREMENT_STEP, INCREMENT_STEP } from './actionTypes';
import { HYDRATE } from 'next-redux-wrapper'
import { MODES } from '../../constants'
import { StepActionType } from './actions'

interface CalculatorState {
  step: number
  mode: string
}

const initialState: CalculatorState = {
  step: 1,
  mode: MODES.AUTO
};

const calculatorReducer = (state = initialState, action: StepActionType): CalculatorState => {
  switch (action.type) {
    case HYDRATE: 
      return { ...state, ...action.payload }
    case INCREMENT_STEP:
      return {...state, step: state.step + 1};
    case DECREMENT_STEP:
      return {
        ...state, 
        step: state.step > 1 ? state.step - 1 : 1
      };
    default:
      return state;
  }
};

export default calculatorReducer;