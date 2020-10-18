/**
 * * 4
 * * 考查 regex.test() 的执行逻辑
 * * regex.lastIndex 的理论基础
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 */
var regex = /yideng/g;
console.log(regex.test('yideng')); // true
console.log(regex.test('yideng')); // false
console.log(regex.test('yideng')); // true
console.log(regex.test('yideng')); // false