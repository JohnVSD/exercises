/**
 * 使用 ES6 元编程修复；
 * 提示：如下代码会输出 Uncaught TypeError: yideng is not iterable.
 * 请问如何修复？
 */ 
var yideng = {
  a: 2,
  b: 3
};

for (var v of yideng) {
  console.log(v);
}
