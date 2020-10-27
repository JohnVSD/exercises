// 测试题：第 1 题

console.log(a);
a();
var a = 3;

function a() {
  console.log(10)
}
console.log(a);
a = 6;
a();

// ! JS 引擎会解析为如下步骤
/* 
  function a() {  // * 函数被提升至最上面
    console.log(10)
  }

  var a; // * 与函数重名，会被忽略。

  console.log(a); // * 没有调用函数，弹出函数本身
  a(); // * 调用函数弹出 10

  a = 3;

  console.log(a); // * 3
  a = 6;
  a(); // * typeError: a is not a function 因为 a 被赋值为普通值了，不是一个函数了。
*/