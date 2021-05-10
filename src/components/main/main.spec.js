import Main from './main';
import { render, screen } from '@testing-library/react';

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

  it('should initially render display section with 0', () => {
    expect(screen.getByLabelText('display')).toBeInTheDocument();
    expect(screen.getByLabelText('display')).toHaveTextContent('0');
  });
});