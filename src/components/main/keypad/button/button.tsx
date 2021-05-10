import styles from './button.module.scss';

export interface Props {
  value: string;
  size?: string;
  clickHandler: (value: string) => void;
}

const Button: React.FC<Props> = ({ value, size = '', clickHandler }) => {
  return (
    <button className={`${styles.buttonContainer} ${styles['size-' + size]}`} onClick={() => clickHandler(value)}>{value}</button>
  );
};

export default Button;