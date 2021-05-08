import { useState } from 'react';
import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';

const Main: React.FC = () => {
  let [displayedValue, setDisplayedValue] = useState<number>(0);

  return (
    <div className={styles.mainContainer}>
      <Display displayedValue={displayedValue}/>
      <Keypad/>
    </div>
  );
};

export default Main;