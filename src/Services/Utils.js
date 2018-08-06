export default (price, currency) => {
  const sep = `${price}`.split('.');

  return sep.length < 2
    ? `${sep[0]}<small>.00${currency}</small>`
    : `${sep[0]}<small>.${sep[1]}${currency}</small>`;
};
