function foo(n) {
  return bar(n * 2);
}

function bar() {
  // 查看调用帧
  console.trace();
}

foo(1);