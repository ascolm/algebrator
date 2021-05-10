import { useState, useEffect } from 'react';
import { calculate } from './main-helpers';
import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';
import logo from 'assets/dcmnLogo.png';

const Main: React.FC = () => {
  let [displayedValue, setDisplayedValue] = useState<string>('0');
  let [currentValue, setCurrentValue] = useState<string | null>(null);
  let [memoryValue, setMemoryValue] = useState<string>('0');
  let [activeOperator, setActiveOperator] = useState<string>('');

  useEffect(() => {
    if (currentValue !== null) {
      setDisplayedValue(currentValue);
    } else {
      setDisplayedValue(memoryValue);
    }
  }, [currentValue]);

  function numberButtonHandler (value: string) {
    if (memoryValue !== '0' && !activeOperator) setMemoryValue('0');
    if (currentValue === '0' && value === '0') return;

    if (currentValue === null || currentValue === '0') {
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
      setMemoryValue('' + calculate(memoryValue, activeOperator, currentValue!));
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
      <img src={logo} alt='DCMN logo' className={styles.dcmnLogo}></img>
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