/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    if (number >= 0) {
      sum = sum + number;
    }
    console.log(number);
  });
  return sum;
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
