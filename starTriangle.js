// Write a function named starTriangle that takes n as an argument and returns a triangle of n strings consisting of asterisks (*). 
//All lines except the last one end with a '\n' newline character.

function starTriangle(n) {
  let str = '';
  for (let i = 1; i <= n; i++) { // i is a number of a line and amount of *
    for (let j = 1; j <= i; j++) { // j is an amount of n 
      str += '*';
    }
    if (i !== n) str += '\n';
  }
  return str;
}

starTriangle(3);
starTriangle(5);