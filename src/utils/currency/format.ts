export function formatCurrency(
  value?: number,
  currency: string = 'BRL',
  pattern: string = 'pt-BR',
) {
  if (!value) {
    return new Intl.NumberFormat(pattern, {
      style: 'currency',
      currency,
    }).format(0);
  }

  return new Intl.NumberFormat(pattern, {
    style: 'currency',
    currency,
  }).format(value);
}
