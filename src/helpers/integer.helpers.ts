export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
  
export const currencyConverter = (num) => {
  if (num > 0) return `$${num}`;
  const numStr = num.toString().split('');
  numStr[0] = '-$';
  return numStr.join('');
};