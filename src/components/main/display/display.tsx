import styles from './display.module.scss';

export interface Props {

}

const Display: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.displayContainer}>

    </div>
  );
};

export default Display;