export function sanitizeCurrencyToFloat(value: string) {
  return parseFloat(value.replace(/[R$\s.]/g, '').replace(',', '.'));
}
