// !请问变量 a 会被 GC(垃圾回收机制) 回收吗 为什么？
function test() {
  var a = "yideng"; 
  return function () {
    eval("");
  }
};
test()();
