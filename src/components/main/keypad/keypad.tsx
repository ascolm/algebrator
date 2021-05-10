import styles from './keypad.module.scss';
import Button from './button/button';
import React from 'react';

export interface Props {
  numberHandler: (value: string) => void;
  operatorHandler: (value: string) => void;
  calculateHandler: () => void;
  clearHandler: () => void;
  decimalHandler: () => void;
}

const Keypad: React.FC<Props> = ({ numberHandler, operatorHandler, calculateHandler, clearHandler, decimalHandler }) => {
  return (
    <div className={styles.keypadContainer}>
      <Button value='7' clickHandler={numberHandler}/>
      <Button value='8' clickHandler={numberHandler}/>
      <Button value='9' clickHandler={numberHandler}/>
      <Button value='+' color={'#33e9c3'} clickHandler={operatorHandler}/>
      <Button value='4' clickHandler={numberHandler}/>
      <Button value='5' clickHandler={numberHandler}/>
      <Button value='6' clickHandler={numberHandler}/>
      <Button value='-' color={'#33e9c3'} clickHandler={operatorHandler}/>
      <Button value='1' clickHandler={numberHandler}/>
      <Button value='2' clickHandler={numberHandler}/>
      <Button value='3' clickHandler={numberHandler}/>
      <Button value='=' size='2' color={'#33e9c3'} clickHandler={calculateHandler}/>
      <Button value='AC' color={'#e97778'} clickHandler={clearHandler}/>
      <Button value='0' clickHandler={numberHandler}/>
      <Button value='.' color={'#e97778'} clickHandler={decimalHandler}/>
    </div>
  );
};

export default React.memo(Keypad);