// Sum the String
// Given a string containing digits and other characters, return the sum of all numbers in the string.

// Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
// Ignore any non-digit characters.

function stringSum(str) {
  console.log(str);
  // find the digits
  const regex = /([\d]*)/g;
  const arr = str.matchAll(str);
  console.log(arr);

  return str;
}
