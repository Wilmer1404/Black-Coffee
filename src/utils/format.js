/** Formatea un número como precio en soles: 6 -> "S/ 6.00". */
export const formatPrice = (value) => `S/ ${Number(value).toFixed(2)}`
