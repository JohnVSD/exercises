/**
 * * 请在下面写出 JavaScript 面向对象编程的混合式继承。并写出 ES6 版本；
 * 要求汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖方法。
 * Cruze子类实现父类颜色是红色，价格是 140000，售卖方法实现输出如下语句：
 * 将红色的 Cruze 卖给了小王价格是 14万。
 */

//  * ES5 实现
function Car(color, price) {
  this.color = color;
  this.price = price;
}

Car.prototype.sale = function() {
  console.log(`父级方法 --- 颜色：${this.color}；价格：${this.price}`);
}

function Cruze(color, price, name) {
  Car.call(this, color, price);
  this.name = name;
}

Cruze.prototype = new Car(); // Object.create() 方法也可参考
Cruze.prototype.constructor = Car;
Cruze.prototype.subSale = function() {
  console.log(`将 ${this.color} 的 Cruze 卖给了${this.name}，价格是${this.price}`);
}

var instance1 = new Cruze('red', 140000, '小王');
instance1.subSale();
console.log(instance1);

// * ES6 版本
// class Car {
//   constructor (color, price) {
//     this.color = color;
//     this.price = price;
//   }
  
//   sale() {
//     console.log(`父级方法 --- 颜色：${this.color}；价格：${this.price}`);
//   }
// }

// class Cruze extends Car {
//   constructor (color, price, name) {
//     super(color, price);
//     this.name = name;
//   }

//   sale() {
//     console.log(`将 ${this.color} 的 Cruze 卖给了${this.name}，价格是${this.price}`);
//   }
// }

// var instance1 = new Cruze('红色', 140000, '小王');
// instance1.sale();
// console.log(instance1);