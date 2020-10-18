/**
 * ! 疑问
 * 请用一句算出 0 ~ 100 之间学生的等级，如 90 ~ 100 为1等生，80 ~ 90为2等生。
 * 以此类推，不允许使用 if、switch 语句。
 */

function grade(x) {
  return 10 - parseInt(x / 10);
}
console.log(`${grade(100)}等生`);
console.log(`${grade(98)}等生`);
console.log(`${grade(91)}等生`);
console.log(`${grade(89)}等生`);
console.log(`${grade(81)}等生`);
console.log(`${grade(75)}等生`);
console.log(`${grade(71)}等生`);