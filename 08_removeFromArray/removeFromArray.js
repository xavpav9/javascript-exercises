const removeFromArray = function(arr, ...removals) {
  for (let remove of removals) {
    let index = 0;
    while ((index = arr.findIndex(value => value === remove)) !== -1) {
      arr.splice(index, 1);
    }
  };
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
