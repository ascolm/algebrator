import styles from './keypad.module.scss';

export interface Props {

}

const Keypad: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.keypadContainer}></div>
  );
};

export default Keypad;