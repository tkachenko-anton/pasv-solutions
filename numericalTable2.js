// Write a function called numericalTable that takes the numbers n and m as arguments and returns a table of numbers from 1 to n.
// Each line contains m numbers, separated by a space. All lines except the last one end with a '\n' newline character.

function numericalTable(n, m) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (j === m) str += i;
      else str += i + ' ';
    }
    if (i !== n) str += '\n';
  }
  console.log(str);
}

numericalTable(1, 6);
numericalTable(3, 5);