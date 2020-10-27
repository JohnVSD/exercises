function test(m) {
  // 本题考查函数作用域，用 按值或按引用传递作为障眼法；
  // 答：函数中的 m 可以理解为局部变量；
  // var m;
  m = { v: 5 };
}
var m = { k: 3 };
test(m);
console.log(m.v); // undefined