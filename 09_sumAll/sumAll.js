const sumAll = function(num1, num2) {
  if (num1 !== parseInt(num1) || num2 !== parseInt(num2) || num1 < 0 || num2 < 0) return "ERROR";
  let small = (num1 > num2) ? num2 : num1;
  let large = (num1 > num2) ? num1 : num2;

  let sum = 0;
  
  for (; small <= large; ++small) {
    sum += small;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
