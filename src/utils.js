export const formatCurrency = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 0
})
export const getProgressBarVariant = (amount, max) => {
  const ratio = amount / max

  if (ratio < 0.5) return 'primary'
  if (ratio < 0.75) return 'warning'

  return 'danger'
}
