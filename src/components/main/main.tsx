import styles from './main.module.scss';
import Display from 'components/main/display/display';
import Keypad from 'components/main/keypad/keypad';

const Main: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <Display/>
      <Keypad/>
    </div>
  );
};

export default Main;