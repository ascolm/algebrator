import { useState, useEffect } from 'react';
import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';

const Main: React.FC = () => {
  let [displayedValue, setDisplayedValue] = useState<string>('0');
  let [currentValue, setCurrentValue] = useState<string>('0');
  let [memoryValue, setMemoryValue] = useState<string>('0');
  let [activeOperator, setActiveOperator] = useState<string>('');

  useEffect(() => {
    if (currentValue !== '0') {
      setDisplayedValue(currentValue);
    } else if (memoryValue !== '0') {
      setDisplayedValue(memoryValue);
    }
  }, [currentValue]);

  function numberButtonHandler (value: string) {
    if (currentValue === '0') {
      setCurrentValue(value);
    } else {
      setCurrentValue(valueOnDisplay =>  valueOnDisplay + value);
    }
  }

  function operatorButtonHandler (value: string) {
    if (!activeOperator) {
      if (memoryValue === '0') setMemoryValue(currentValue);
      setActiveOperator(value);
    } else {
      setActiveOperator(value);
      setMemoryValue(valueInMemory => '' + calculate(valueInMemory, activeOperator, currentValue));
    }

    setCurrentValue('0');
  }

  function calculate (valueL: string, operator: string, valueR: string) {
    const valueLeft = parseFloat(valueL);
    const valueRight = parseFloat(valueR);

    switch (operator) {
    case ('+'):
      return valueLeft + valueRight;
    case ('-'):
      return valueLeft - valueRight;
    }
  }

  function calculateButtonHandler () {
    if (activeOperator) {
      setMemoryValue(valueInMemory => '' + calculate(valueInMemory, activeOperator, currentValue));
      setActiveOperator('');
      setCurrentValue('0');
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Display displayedValue={displayedValue}/>
      <Keypad numberHandler={numberButtonHandler} operatorHandler={operatorButtonHandler} calculateHandler={calculateButtonHandler}/>
    </div>
  );
};

export default Main;