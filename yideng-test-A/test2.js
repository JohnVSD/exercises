var x = 1,
  y = 0,
  z = 0;

function add(x) { // 下方有重名函数，所以会被覆盖。
  return (x = x + 1); // 被覆盖此处无用。
}

y = add(x);

console.log(y); // 4

function add(x) {
  // ! 引擎会将下方代码解析为
  // var x;
  // return x = x + 3; 等号后面的 x 是函数形参。
  // return x + 3; 等同于这样
  
  return (x = x + 3); 
}
z = add(x);

console.log(z); // 4