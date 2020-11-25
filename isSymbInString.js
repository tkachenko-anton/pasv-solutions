'use strict';

function iSymbInString(str, symb){
  let letter = false;
  for (let i = 0; i < str.length; i++) {
  if (str[i] === symb) {
  letter = true;
  break;
  }
  }
  return letter;
  }

  iSymbInString("abcd", "b");
  iSymbInString("abcd", "f");