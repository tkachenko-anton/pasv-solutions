//Write a function called sumsInArray that takes a two-dimensional array arr as an argument 
//and returns an array containing the sums of the elements of the nested arrays.

function sumsInArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    newArr.push(sum);
  }
  console.log(newArr);
}

sumsInArray([[1, 2], [2, -3, 1, 1], [3, 5, 10], [3, 7]]);
sumsInArray([[], [2, 2], [0]]);