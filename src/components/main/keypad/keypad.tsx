import styles from './keypad.module.scss';
import Button from './button/button';

export interface Props {

}

const Keypad: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.keypadContainer}>
      <Button value='7'/>
      <Button value='8'/>
      <Button value='9'/>
      <Button value='+'/>
      <Button value='4'/>
      <Button value='5'/>
      <Button value='6'/>
      <Button value='-'/>
      <Button value='1'/>
      <Button value='2'/>
      <Button value='3'/>
      <Button value='=' size='2'/>
      <Button value='AC'/>
      <Button value='0'/>
      <Button value='.'/>
    </div>
  );
};

export default Keypad;