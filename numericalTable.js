//Write a function called numericalTable that takes n as an argument and returns a table of numbers from 1 to n.

function numericalTable(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 5; j++) {
      if (j === 5) str += i;
      else str = str + i + ' ';
    }
    if (i !== n) str += '\n';
  }
  console.log(str);
}

numericalTable(3);
numericalTable(0);