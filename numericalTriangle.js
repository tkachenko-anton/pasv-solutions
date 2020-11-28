//Write a function called numericalTriangle that takes n as an argument and returns a triangle of numbers 1 through n, separated by a space. 
//All lines except the last one end with a '\n' newline character.

function numericalTriangle(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === i) str += i;
      else str += i + ' ';
    }
    if (i !== n) str += '\n';
  }
  return str;
}

numericalTriangle(3);