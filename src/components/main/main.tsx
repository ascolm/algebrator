import { useState, useEffect } from 'react';
import { calculate } from './main-helpers';
import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';

const Main: React.FC = () => {
  let [displayedValue, setDisplayedValue] = useState<string>('0');
  let [currentValue, setCurrentValue] = useState<string | null>(null);
  let [memoryValue, setMemoryValue] = useState<string>('0');
  let [activeOperator, setActiveOperator] = useState<string>('');

  useEffect(() => {
    if (currentValue !== null) {
      setDisplayedValue(currentValue);
    } else if (memoryValue !== '0') {
      setDisplayedValue(memoryValue);
    }
  }, [currentValue]);

  function numberButtonHandler (value: string) {
    if (currentValue === null) {
      setCurrentValue(value);
    } else {
      setCurrentValue(valueOnDisplay =>  valueOnDisplay + value);
    }
  }

  function operatorButtonHandler (value: string) {
    if (!activeOperator) {
      if (memoryValue === '0' && currentValue !== null) setMemoryValue(currentValue);
      setActiveOperator(value);
    } else {
      setActiveOperator(value);
      if (currentValue !== null) {
        setMemoryValue(valueInMemory => '' + calculate(valueInMemory, activeOperator, currentValue!));
      }
    }

    setCurrentValue(null);
  }

  function calculateButtonHandler () {
    if (activeOperator && currentValue !== null) {
      setMemoryValue(valueInMemory => '' + calculate(valueInMemory, activeOperator, currentValue!));
      setActiveOperator('');
      setCurrentValue(null);
    }
  }

  function clearButtonHandler () {
    setDisplayedValue('0');
    setCurrentValue(null);
    setMemoryValue('0');
    setActiveOperator('');
  }

  function decimalButtonHandler () {
    if (currentValue !== null && !currentValue.match(/\./)) setCurrentValue(currentValue => currentValue + '.');
  }

  return (
    <div className={styles.mainContainer}>
      <Display displayedValue={displayedValue}/>
      <Keypad
        numberHandler={numberButtonHandler}
        operatorHandler={operatorButtonHandler}
        calculateHandler={calculateButtonHandler}
        clearHandler={clearButtonHandler}
        decimalHandler={decimalButtonHandler}
      />
    </div>
  );
};

export default Main;