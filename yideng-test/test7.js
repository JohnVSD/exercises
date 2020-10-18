// 函数提升

function fun1() {
  console.log(1);
}

(function () {
  // 等同于 var fun1; 编译阶段声明提升。
  if (false) {
    // fun1 = function() { ... } 执行阶段
    function fun1() { // 虽然不会执行，但是js引擎在编译阶段会将函数提升至当前作用域顶层。
      console.log(2);
    }
  }
  fun1(); // fun1 is not a function
})();