export function parsePrice(price: string) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  return Number(
    price
      .replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)))
      .replace(/\D/g, "")
  );
}
