import * as React from 'react';
import styled from 'styled-components';
import StepsFactory from '../StepFactory';
import { StepActionCreator } from '../../containers/CalculatorContainer/actions';

type CalculatorProps = {
  step: number,
  mode: string,
  decrementStep: StepActionCreator,
  incrementStep: StepActionCreator
};

const StyledCalculator = styled.div`
    width: 50vw;
    height: 50vw;
    max-width: 600px;
    max-height: 600px;
    border: 2px solid #f1f1f1;
    padding: 10px;
    position: relative;
`;

const StyledButtonsWrapper = styled.div`
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
`;

const Calculator: React.FC<CalculatorProps> = (props) => {
  return (
    <StyledCalculator>
        <StepsFactory {...props} />
        <StyledButtonsWrapper>
          <button onClick={props.decrementStep}>Decrement</button>
          <button onClick={props.incrementStep}>Increment</button>
        </StyledButtonsWrapper>
    </StyledCalculator>
  )
};

export default Calculator;