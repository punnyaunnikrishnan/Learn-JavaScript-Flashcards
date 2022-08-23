/**
 * @param {number[]} grades
 */
function sumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum = sum + grade;
    console.log(grade);
  });
  return sum;
}
// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
