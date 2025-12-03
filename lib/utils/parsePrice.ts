export function parsePrice(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}
