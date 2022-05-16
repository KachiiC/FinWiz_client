export const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const currencyConverter = (num: number) => {
  if (num > 0) return `$${num}`;
  const numStr = num.toString().split('');
  numStr[0] = '-$';
  return numStr.join('');
};

export const positiveNegative = (num: number, type?: string | undefined) => {
  const classLogic = num > 0 ? 'positive' : 'negative';
  const typeLogic = type === '%' ? `${num}%` : `${currencyConverter(num)}`;

  return <div className={`${classLogic}-amount`}>{typeLogic}</div>;
};
