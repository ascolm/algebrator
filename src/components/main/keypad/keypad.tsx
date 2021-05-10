import styles from './keypad.module.scss';
import Button from './button/button';

export interface Props {
  numberHandler: (value: string) => void;
  operatorHandler: (value: string) => void;
  calculateHandler: () => void;
}

const Keypad: React.FC<Props> = ({ numberHandler, operatorHandler, calculateHandler }) => {
  return (
    <div className={styles.keypadContainer}>
      <Button value='7' clickHandler={numberHandler}/>
      <Button value='8' clickHandler={numberHandler}/>
      <Button value='9' clickHandler={numberHandler}/>
      <Button value='+' clickHandler={operatorHandler}/>
      <Button value='4' clickHandler={numberHandler}/>
      <Button value='5' clickHandler={numberHandler}/>
      <Button value='6' clickHandler={numberHandler}/>
      <Button value='-' clickHandler={operatorHandler}/>
      <Button value='1' clickHandler={numberHandler}/>
      <Button value='2' clickHandler={numberHandler}/>
      <Button value='3' clickHandler={numberHandler}/>
      <Button value='=' size='2' clickHandler={calculateHandler}/>
      <Button value='AC' clickHandler={numberHandler}/>
      <Button value='0' clickHandler={numberHandler}/>
      <Button value='.' clickHandler={numberHandler}/>
    </div>
  );
};

export default Keypad;