// 代码执行题，并解释为什么

// * 1

// alert(a);
// a();
// var a = 3;

// function a() {
//   alert(10)
// }
// alert(a);
// a = 6;
// a();

// * 2
// function test(m) {
//   // 本题考查函数作用域，用 按值或按引用传递作为障眼法；
//   // 答：函数中的 m 可以理解为局部变量；
//   // var m;
//   m = { v: 5 };
// }
// var m = { k: 3 };
// test(m);
// console.log(m.v); // undefined

// ! 3 疑问题 不明白
// function fun1() {
//   console.log(1);
// }

// (function () {
//   if (false) {
//     function fun1() {
//       console.log(2);
//     }
//   }
//   fun1();
// })();

/**
 * * 4
 * * 考查 regex.test() 的执行逻辑 
 * * regex.lastIndex 的理论基础
 */
// var regex = /yideng/g;
// console.log(regex.test('yideng')); // true
// console.log(regex.test('yideng')); // false
// console.log(regex.test('yideng')); // true
// console.log(regex.test('yideng')); // false

// * 5 又是变量和函数提升的问题；
// {
//   var yideng = function yideng() {
//     yideng = 1;
//     console.log(typeof yideng); // ! function 不懂
//   }
//   yideng();
//   yideng = 1; 
//   console.log(typeof yideng); // number
// }