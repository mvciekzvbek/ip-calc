import React from 'react';
import {connect} from 'react-redux';
import Calculator from '../../components/Calculator/Calculator';
import {decrementStep, incrementStep} from './actions';

function CalculatorContainer (props) {
  return (
    <Calculator {...props} />
  );
}

const mapStateToProps = state => ({
    step: state.calculator.step
});

const mapDispatchToProps = {
    incrementStep,
    decrementStep
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
