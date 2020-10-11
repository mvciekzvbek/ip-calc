import { DECREMENT_STEP, INCREMENT_STEP } from './actionTypes';
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    step: 1
};

const calculatorReducer = (state = initialState, action) => {
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