// Write a function called upsideDown that takes n as an argument and returns a triangle of n strings of asterisks (*). 
// The first line contains n stars, the second contains (n-1) asterisk, ..., the last line contains 1 asterisk.

function upsideDown(n) {
  let str = '';
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    if (i > 1) str += '\n';
  }
  return str;
}

upsideDown(3);
upsideDown(1);