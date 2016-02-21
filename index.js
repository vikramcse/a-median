'use strict';
module.exports = function (arr) {
  var half = Math.floor(arr.length / 2);

  var sorted = arr.sort(function (a, b) {
    return a - b;
  });

  if (arr.length % 2 !== 0) {
    return sorted[Math.floor(half)];
  } else {
    return (sorted[Math.floor(half)] + sorted[Math.floor(half - 1)]) / 2.0;
  }
};
