var yideng = function yideng() {
  yideng = 1;
  console.log(typeof yideng); // * function (函数name无法更改)；
}
yideng();
yideng = 1; 
console.log(typeof yideng); // number