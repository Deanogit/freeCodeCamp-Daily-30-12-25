## String Number Summation

A utility function that extracts numerical values from alphanumerical strings and calculates their total sum. This tool is designed to recognise multi-digit numbers as single entities while ignoring non-numeric "noise".

### Feautures

    -   Continuous Digit Parsing: Correctly identifies "123" as one hundred and twenty-three rather than 1, 2, 3.

    -   Non-Digit Immunity: Safely ignores letters, symbols, and whitespace.

    -   Empty-String Safety: Returns `0` if no digits are present, preventing runtime errors.

### Implementation Details

The function utilises a combination of Regular Expressions and Array reduction:

    1.  Extraction: `str.match(/[\d]+/g)` creates an array of strings consisting only of digits.
    2.  Validation: A null-check ensures that if no matches are found, the function exits with `0`.
    3.  Accumulation: The `reduce()` method iterates through the array, converting each string to an integer and adding it to a running total.

### Usage

```JavaScript

/**
 * Sums all numbers found within a string
 * @param {string} str - The input string containing mixed characters
 * @returns {number} The total sum of all identified numbers.
 */
function stringSum(str){
    const regex = /[\d]+/g;
    const matches = str.match(regex);

    if (!matches) return 0;

    return matches.reduce((sum, current) => {
        return sum + Number.parseInt(current)
    }, 0);
}

// Examples:
console.log(stringSum("abc10def20")); // 30
console.log(stringSum("1house23"));    // 24
console.log(stringSum("no numbers"));  // 0
```

### What I Learned

1. Regex quantifiers

I learned that the `+` quantifier is what makes "12" stay together. Without it, `[\d]` would find "1" and "2" seperately. The global flag (`\g`) is also essential to ensure the search doesn't stop after the first number it finds.

2. Guarding Against `null`

JavaScript's `.match()` method returns `null` if not matches are found. I learned that you cannot call array methods like `.reduce()` on `null`, so implementing a "Guard Clause" (`if (!matches)`) is a vital pattern for writing stable code.

3. The Importance of the Initial Value in `.reduce()`

One of the biggest takeaways was providing `0` as the second argument to `.reduce()`.

    -   Without `0`: If the array only has one element (e.g, `["13"]`), reduce returns the string "13" without running the math.

    -   With `0`: The accumulator (`sum`) starts as a Number, ensuring the final output is always a Number, even if the array is small or contains only one string.
