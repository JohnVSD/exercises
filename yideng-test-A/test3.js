// ! 关于 this 指向和原型属性。 疑问题

this.a = 20;

function go() {
  console.log(this.a);
  this.a = 30;
}
go.prototype.a = 40;

var test = {
  a: 50,
  init: function (fn) {
    fn(); // 无人调用，默认指 window
    console.log(this.a);
    return fn;
  },
};

console.log(new go().a); // 40, 30 谁调用指谁。

test.init(go); // 20, 50 
// ! 为什么函数 go 被执行一次后 this 指向会发生改变？
var p = test.init(go); // 30, 50

p(); // 30