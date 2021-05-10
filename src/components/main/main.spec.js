import Main from './main';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('should render correctly', () => {
  beforeEach(() => {
    render(
      <Main/>
    );
  });

  it('should render all buttons', () => {
    expect(screen.getByRole('button', {name: '0'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '1'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '2'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '3'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '4'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '5'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '6'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '7'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '8'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '9'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '-'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '.'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'AC'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '='})).toBeInTheDocument();
  });

  it('should render display section, initially with 0', () => {
    expect(screen.getByLabelText('display')).toBeInTheDocument();
    expect(screen.getByLabelText('display')).toHaveTextContent('0');
  });
});

describe('should accurately perform operations', () => {
  let button3, button4, buttonPlus, buttonMinus, buttonEqual, display, buttonDecimal, buttonClear;

  beforeEach(() => {
    render(
      <Main/>
    );
    button3 = screen.getByRole('button', {name: '3'});
    button4 = screen.getByRole('button', {name: '4'});
    buttonPlus = screen.getByRole('button', {name: '+'});
    buttonMinus = screen.getByRole('button', {name: '-'});
    buttonEqual = screen.getByRole('button', {name: '='});
    buttonDecimal = screen.getByRole('button', {name: '.'});
    buttonClear = screen.getByRole('button', {name: 'AC'});
    display = screen.getByLabelText('display');
  });

  it('should display clicked numbers (whole & decimal)', () => {
    userEvent.click(button3);
    expect(display).toHaveTextContent('3');

    userEvent.click(button4);
    expect(display).toHaveTextContent('34');

    userEvent.click(buttonDecimal);
    userEvent.click(button4);
    userEvent.click(button3);
    expect(display).toHaveTextContent('34.43');
  });

  it('should add two numbers and display the result', () => {
    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('7');

    userEvent.click(button3);
    userEvent.click(buttonDecimal);
    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonDecimal);
    userEvent.click(button4);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('7.7');
  });

  it('should add a sequence of numbers and display cummulative sum in between', () => {
    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('7');
    userEvent.click(button4);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('11');
    userEvent.click(button3);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('14');
  });

  it('should subtract two numbers and display the result', () => {
    userEvent.click(button4);
    userEvent.click(buttonMinus);
    userEvent.click(button3);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('1');

    userEvent.click(button3);
    userEvent.click(buttonMinus);
    userEvent.click(button4);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('-1');

    userEvent.click(button3);
    userEvent.click(buttonDecimal);
    userEvent.click(button3);
    userEvent.click(buttonMinus);
    userEvent.click(button4);
    userEvent.click(buttonDecimal);
    userEvent.click(button4);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('-1.1');
  });


  it('should subtract a sequence of numbers and display cummulative result in between', () => {
    userEvent.click(button3);
    userEvent.click(buttonMinus);
    userEvent.click(button4);
    userEvent.click(buttonMinus);
    expect(display).toHaveTextContent('-1');
    userEvent.click(button4);
    userEvent.click(buttonMinus);
    expect(display).toHaveTextContent('-5');
    userEvent.click(button3);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('-8');
  });

  it('should add and subtract a sequence of numbers and display cummulative result in between', () => {
    userEvent.click(button3);
    userEvent.click(buttonMinus);
    userEvent.click(button4);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('-1');
    userEvent.click(button4);
    userEvent.click(buttonMinus);
    expect(display).toHaveTextContent('3');
    userEvent.click(button3);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('0');
  });

  it('should clear all with AC button', () => {
    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('7');
    userEvent.click(buttonClear);
    expect(display).toHaveTextContent('0');

    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('7');

    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonClear);
    expect(display).toHaveTextContent('0');

    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('7');

    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(buttonClear);
    expect(display).toHaveTextContent('0');

    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('7');
  });

  it('should reset memory after clicking equals button', () => {
    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button4);
    userEvent.click(buttonEqual);
    expect(display).toHaveTextContent('7');

    userEvent.click(button3);
    userEvent.click(buttonPlus);
    userEvent.click(button3);
    userEvent.click(buttonPlus);
    expect(display).toHaveTextContent('6');
  });
});