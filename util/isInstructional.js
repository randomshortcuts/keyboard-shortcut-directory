function isInstructional(string) {
  return string.length > 1 && string.indexOf('(') == 0;
}

module.exports = isInstructional;