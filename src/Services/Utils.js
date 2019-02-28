const formatPrice = (
  price: string | number | null,
  showDecimals = null,
): string => {
  let countDecimals = showDecimals ? 2 : 0;
  if (showDecimals === null) {
    countDecimals = !Number.isInteger(Number(price)) ? 2 : 0;
  }

  const displayPrice = price || 0;

  return parseFloat(displayPrice).toFixed(countDecimals);
};

export default formatPrice;
