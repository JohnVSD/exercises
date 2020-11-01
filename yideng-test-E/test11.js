// todo 1、请描述你理解的函数式编程，并书写如下代码结果。
var Container = function(x) {
  this.__value = x; 
}
Container.of = x => new Container(x); 
Container.prototype.map = function(f) {
  return Container.of(f(this.__value))
} 
console.log(
  Container.of(3)
    .map(x => x + 1)
    .map(x => 'Result is ' + x)
);

// todo 2、使用 Zone + RX 写出一段 FRP 的代码。