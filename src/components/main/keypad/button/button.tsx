import styles from './button.module.scss';

export interface Props {
  value: string;
  size?: string
}

const Button: React.FC<Props> = ({ value, size = '' }) => {
  return (
    <button className={`${styles.buttonContainer} ${styles['size-' + size]}`}>{value}</button>
  );
};

export default Button;