// Object.prototype 和 Function.prototype 打印内容差距这么大为什么呢？
Object.prototype.a = 'a';
Function.prototype.a = 'a1';

function Person() {};
var yideng = new Person();
console.log(Person.a); // a1
console.log(yideng.a); // a
console.log(1..a); // ？这什么玩意
console.log(1 .a); // ？这什么玩意
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);

console.log(yideng);