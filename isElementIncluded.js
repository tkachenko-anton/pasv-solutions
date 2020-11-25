'use strict';

function isElementIncluded(arr, x) {
  let hasX = false;
  for (let i = 0; i < arr.length; i++) {
  if (arr.includes(x)) {
  hasX = true;
  break;
  }
  }

  return hasX;
  }

isElementIncluded([10, 0, 4, 5, 9, 30], 0);
isElementIncluded([2, 1, -3, 1, 4, 3], 1);
isElementIncluded([2, 1, -3, -4, 3], 0);