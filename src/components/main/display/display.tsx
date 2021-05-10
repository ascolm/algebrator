import styles from './display.module.scss';

export interface Props {
  displayedValue: string;
}

const Display: React.FC<Props> = ({ displayedValue }) => {
  return (
    <div className={styles.displayContainer}>
      <h2>{displayedValue}</h2>
    </div>
  );
};

export default Display;