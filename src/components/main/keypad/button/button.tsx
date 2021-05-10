import styles from './button.module.scss';

export interface Props {
  value: string;
  clickHandler: (value: string) => void;
  size?: string;
  color?: string;
}

const Button: React.FC<Props> = ({ value, size = '', clickHandler, color }) => {
  return (
    <button className={`${styles.buttonContainer} ${styles['size-' + size]}`} style={{color}} onClick={() => clickHandler(value)}>{value}</button>
  );
};

export default Button;