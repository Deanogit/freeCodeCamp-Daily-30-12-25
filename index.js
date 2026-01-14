// Sum the String
// Given a string containing digits and other characters, return the sum of all numbers in the string.

// Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
// Ignore any non-digit characters.

// function stringSum(str) {
//   console.log(str);
//   // find the digits
//   // run through the string, capturing the digits into an array
//   const regex = /[\d]+/g;
//   // const arr = str.matchAll(str)
//   // const arr = str.split(str)
//   const arr = str.match(regex);
//   console.log(arr);

//   // total arr
//   const total = arr.reduce((a, b) => Number.parseInt(a) + Number.parseInt(b));
//   console.log(total);
//   return total;
// }

function stringSum(str) {
  console.log(str);

  const regex = /[\d]+/g;
  const matches = str.match(regex);

  // If matches is null return 0
  if (!matches) {
    return 0;
  }

  // Use 0 as the starting point (initial value)
  return matches.reduce((sum, current) => {
    return sum + Number.parseInt(current);
  }, 0);
}
