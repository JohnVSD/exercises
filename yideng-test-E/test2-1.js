// 附加题
function bar() {
  console.log(myName);
}
function foo() {
  var myName = "老袁";
  bar();
}
var myName = "京程一灯";
foo();