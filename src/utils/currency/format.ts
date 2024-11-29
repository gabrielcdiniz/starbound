export function formatCurrency(
  value?: number,
  currency: string = 'BRL',
  pattern: string = 'pt-BR',
) {
  return new Intl.NumberFormat(pattern, {
    style: 'currency',
    currency,
  }).format(value ?? 0);
}

export const formatCurrencyString = (value: string) => {
  const numericValue = value.replace(/[^0-9]/g, '');

  let floatValue = parseFloat(numericValue);

  if (isNaN(floatValue)) {
    floatValue = 0;
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(floatValue / 100);
};
