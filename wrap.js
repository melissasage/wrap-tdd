const wrap = (string, col) => {
  if (string.length <= col) {
    return string;
  }
  const indexOfBlank = string.lastIndexOf(" ", col);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = col;
    offset = 0;
  }
  return (
    string.substring(0, split) +
    "\n" +
    wrap(string.substring(split + offset), col)
  );
};
module.exports = wrap;
