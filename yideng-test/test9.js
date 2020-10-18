/**
 * * 考查ES6新方法使用。
 * 请用一句话遍历变量 a，不允许使用 for。
 * 已知 var a = 'abc';
 */ 

var a = 'abc';
console.log(...a);
console.log(Array.from(a));

// ! 借原型方法。 ...
