const formatPrice = (
  price,
  showDecimals,
): string => {
  let countDecimals;
  if (typeof showDecimals === 'undefined') {
    countDecimals = !Number.isInteger(Number(price)) ? 2 : 0;
  } else {
    countDecimals = showDecimals ? 2 : 0;
  }

  const displayPrice = price || 0;

  return parseFloat(displayPrice).toFixed(countDecimals);
};

export default formatPrice;
