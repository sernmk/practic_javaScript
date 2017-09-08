/*
* This function, which receives a number and returns this number in an inverted form.
* Examples:
*   reverseInt(49); // 94
*   reverseInt(-7256); // -6527
*/
export const reverseInt = number => {
  const strNumber = String(number);
  let newNumber;
  let count;
  if (strNumber[0] === '-') {
    newNumber = '-';
    count = 1;
  } else {
    newNumber = '';
    count = 0;
  }
  for (let i = length(strNumber)-1; i >= count ; i--) {
    newNumber += strNumber[i];
  }
  return Number(newNumber);
};
