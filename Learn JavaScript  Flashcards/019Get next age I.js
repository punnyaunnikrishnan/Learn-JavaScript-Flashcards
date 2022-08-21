/**
 * @param {string} age
 */
export function getNextAge(age) {
  return Number.parseInt(age, 10) + 1;
}
console.log(getNextAge(10));
