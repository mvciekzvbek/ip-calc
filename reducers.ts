import calculatorReducer from './containers/CalculatorContainer/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    calculator: calculatorReducer
});

export default rootReducer;