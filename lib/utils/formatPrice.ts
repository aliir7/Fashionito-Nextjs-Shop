export function formatPrice(value: number, options?: { withToman?: boolean }) {
  const { withToman = false } = options || {};
  // number sep
  const formatted = value.toLocaleString("fa-IR");
  return withToman ? `${formatted} تومان` : formatted;
}
