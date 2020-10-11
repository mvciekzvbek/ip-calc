import React from 'react';
import { connect } from 'react-redux';
import Calculator from '../../components/Calculator/Calculator';
import { decrementStep, incrementStep } from './actions';
import { CalculatorProps } from '../../types'
import { stepSelector, modeSelector } from './selectors'


const CalculatorContainer: React.FC<CalculatorProps> = (props) => {
  return (
    <Calculator {...props} />
  );
}

const mapStateToProps = state => ({
    step: stepSelector(state),
    mode: modeSelector(state)
});

const mapDispatchToProps = {
    incrementStep,
    decrementStep
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
