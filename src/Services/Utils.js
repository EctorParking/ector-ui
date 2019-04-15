export const formatPrice = (price, showDecimals = false) => {
  let countDecimals;
  if (!showDecimals) {
    countDecimals = !Number.isInteger(Number(price)) ? 2 : 0;
  } else {
    countDecimals = showDecimals ? 2 : 0;
  }

  const displayPrice = price || 0;

  return parseFloat(displayPrice).toFixed(countDecimals);
};

export const ucfirst = value => `${value[0].toUpperCase()}${value.slice(1)}`;
