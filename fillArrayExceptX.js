'use strict';

function fillArray(n, x){
  let arr = [];
  for (let i = 1; i <= n; i++) {
  if (i === x) {             
  continue;                  
  }
  arr.push(i);  
  }
  return arr;                  
  }

  fillArray(5, 2);
  fillArray(1, 1);