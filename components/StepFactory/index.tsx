import StepOne from './StepOne';
import StepTwoAutomatic from './StepTwoAuto';
import StepTwoManual from './StepTwoManual';
import ResultManual from '../Result/ResultManual';
import ResultAuto from '../Result/ResultAuto';
import { MODES } from '../../constants';

function Factory ({step, mode}) {
  console.log(step);
  switch (step) {
    case 1:
      return <StepOne />;
    case 2:
      return mode === MODES.MANUAL ? <StepTwoManual /> : <StepTwoAutomatic />;
    case 3:
      return mode === MODES.MANUAL ? <ResultManual /> : <ResultAuto />;
    default:
      return <div>Reload...</div>;
  }
}

export default Factory;