// ! 变量和函数提升

var yideng = function yideng() {
  yideng = 1;
  console.log(typeof yideng); // ! function 不懂
}
yideng();
yideng = 1; 
console.log(typeof yideng); // number