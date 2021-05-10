export function calculate (valueL: string, operator: string, valueR: string) {
  const valueLeft = parseFloat(valueL);
  const valueRight = parseFloat(valueR);

  switch (operator) {
  case ('+'):
    return valueLeft + valueRight;
  case ('-'):
    return valueLeft - valueRight;
  }
}