/**
 * ! 考点：各种隐式类型转换
 */
console.log({} + []); // ![object, Object]
{} + [];
[] + {}; 
{} + {};
console.log([] == false); // true
console.log({} == false); // false

if ([]) { // !if 这里肯定有一层隐式类型转换，此步骤存疑
  console.log([] == false); // true
}

("b"+"a"+ +"a"+"a").toLocaleLowerCase(); // ??

0 == "0"; // true
Boolean("0") == Boolean(0); // true
console.log('NaN == 0：', NaN == 0); // false
console.log('NaN <= 0：', NaN <= 0); // false
console.log('null <= 0：', null <= 0); // true 
console.log('1 + null：', 1 + null); // ! type error(); 存疑

var obj = {};
var x = +obj.yideng?.name ?? '京程一灯'; // ! “+” 号是隐式转换
console.log(x); // 京程一灯 

var yideng = "京程一灯";
console.log(typeof yideng); // string
console.log(yideng instanceof String); // false，字面量语法，并不是通过 new String 构造出来的；