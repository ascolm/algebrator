import styles from './main.module.scss';
import Display from 'components/main/display/display';

const Main: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <Display/>
    </div>
  );
};

export default Main;