import { useState } from 'react';
import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';

const Main: React.FC = () => {
  let [displayedValue, setDisplayedValue] = useState<string>('0');
  let [memoryValue, setMemoryValue] = useState<string | null>(null);
  let [activeOperator, setActiveOperator] = useState<string>('');

  function numberButtonHandler (value: string) {
    if (displayedValue === '0' && memoryValue === null) {
      setDisplayedValue(value);
    } else {
      setDisplayedValue(valueOnDisplay =>  valueOnDisplay + value);
    }
  }
  return (
    <div className={styles.mainContainer}>
      <Display displayedValue={displayedValue}/>
      <Keypad numberHandler={numberButtonHandler}/>
    </div>
  );
};

export default Main;