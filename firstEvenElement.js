function firstEvenElement(arr){
  let res = [];
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
  res.push(arr[i], i);
  break;
  }
  }
  
  return res;
  }

firstEvenElement([1, 2, 3, 4, 9, 0]);
firstEvenElement([2, 1, -3, 4, 3]);
firstEvenElement([9, 1, -3, -4, 12, 6]);
firstEvenElement([9, 1, -3, 3, 11]);