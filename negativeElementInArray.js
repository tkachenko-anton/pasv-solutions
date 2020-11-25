function isNegativeInArray(arr){

  let allPositiveNums = false;
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
  allPositiveNums = true;
  break;
  } 
  }
  return allPositiveNums; 
  }

isNegativeInArray([1, 2, 3, 9, 0]);
isNegativeInArray([2, 1, -3, 4, 3]);
isNegativeInArray([2, 1, -3, -4, 3]);