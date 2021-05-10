import { useState, useEffect } from 'react';
import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';

const Main: React.FC = () => {
  let [displayedValue, setDisplayedValue] = useState<string>('0');
  let [currentValue, setCurrentValue] = useState<string | null>(null);
  let [memoryValue, setMemoryValue] = useState<string | null>(null);
  let [activeOperator, setActiveOperator] = useState<string>('');

  useEffect(() => {
    if (currentValue !== null) setDisplayedValue(currentValue);
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
      setActiveOperator(value);
      setMemoryValue(currentValue);
      setCurrentValue(null);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Display displayedValue={displayedValue}/>
      <Keypad numberHandler={numberButtonHandler} operatorHandler={operatorButtonHandler}/>
    </div>
  );
};

export default Main;