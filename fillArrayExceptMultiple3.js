'use strict';

function fillArray(n){
  let arr = [];
  for (let i = 2; i <= n; i++){
  if (i % 2 !== 0 || i % 3 === 0){
  continue;
  }
  arr.push(i);
  }
  console.log(arr);
  }

  fillArray(20);
  fillArray(10);
  fillArray(3);
