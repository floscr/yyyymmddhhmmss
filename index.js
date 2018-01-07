function pad2 (n) { return n < 10 ? '0' + n : n }

/**
 * Return padded date string
 * @return {string}
 */
module.exports = function yymmddhhmmss (dateDivide, dateTimeDivide, timeDivide) {
  const date = new Date()
  return date.getFullYear().toString() +
    dateDivide || '' +
    pad2(date.getMonth() + 1) +
    dateDivide || '' +
    pad2(date.getDate()) +
    dateTimeDivide || '' +
    pad2(date.getHours()) +
    timeDivide || '' +
    pad2(date.getMinutes()) +
    timeDivide || '' +
    pad2(date.getSeconds())
}
