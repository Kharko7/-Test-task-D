const bar = (length) => {
  const result = [];

  for (let columnIdx = 0; columnIdx < length; columnIdx++) {
    const arr = [];

    for (let rowIdx = 0; rowIdx < length; rowIdx++) {
      if (columnIdx === rowIdx || length - columnIdx === rowIdx + 1) {
        arr.push(2);

      } else if ((rowIdx > columnIdx && length - columnIdx > rowIdx + 1) || (columnIdx > rowIdx && rowIdx >= length - columnIdx)) {
        arr.push(1);

      } else {
        arr.push(0);

      };
    };

    result.push(arr);
  };

  return result;
};

console.log(bar(5));
/*[
[2,1,1,1,2],
[0,2,1,2,0],
[0,0,2,0,0],
[0,2,1,2,0],
[2,1,1,1,2],
]
*/
console.log(bar(4));
/*[
[2,1,1,2],
[0,2,2,0],
[0,2,2,0],
[2,1,1,2],
]
*/