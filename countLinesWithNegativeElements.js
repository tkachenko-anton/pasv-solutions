// Write a function called countLinesWithNegativeElements that takes a two-dimensional array arr as an argument 
// and returns the number of lines that contain at least one negative element.

function countLinesWithNegativeElements(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0) {
        count++;
        break;
      }
    }
  }
  return count;
}

countLinesWithNegativeElements([[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]]);
countLinesWithNegativeElements([[1, 3], [2, 7, 8], [3, 5]]);