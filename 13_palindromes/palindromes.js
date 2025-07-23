const palindromes = function (str) {
  let minimalStr = str.toLowerCase().split("").filter(char => (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || (char.charCodeAt(0) > 48 && char.charCodeAt(0) <= 57)).join("");
  return minimalStr.toLowerCase() === minimalStr.split("").reverse().join("").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
