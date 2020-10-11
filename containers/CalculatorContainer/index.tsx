import React from 'react';
import { connect } from 'react-redux';
import Calculator from '../../components/Calculator/Calculator';
import { decrementStep, incrementStep } from './actions';
import { stepSelector } from './selectors'

function CalculatorContainer (props) {
  return (
    <Calculator {...props} />
  );
}

const mapStateToProps = state => ({
    step: stepSelector(state)
});

const mapDispatchToProps = {
    incrementStep,
    decrementStep
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
