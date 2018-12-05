/**
 * 继承
 * JS 实现继承的几种方式
 *  -- instanceof : 测试实例与原型的关系；
 *     -- a instanceof Object
 *  -- isPrototypeOf() : 只要是原型链中出现过得原型，都可以说是该原型链所派生的实例的原型
 *     -- Object.prototype.isPrototypeOf(b)
 */ 

// =============原型链================
// function SuperType () {
//     this.property = true;
// }
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// }

// function SubType () {
//     this.subProperty = false;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//     return this.subProperty;
// }

// var instance = new SubType();
// console.log(instance.getSubValue());
// console.log(instance.getSuperValue());
// console.log(instance)

// =============借用构造函数================
// function SuperType () {
//     this.colors = ['red', 'blue', 'green'];
// }

// function SubType () {
//     // 继承了SuperType
//     SuperType.apply(this);  // apply() || call()
// }

// var instance1 = new SubType();
// instance1.colors.push('black');
// console.log(instance1.colors);

// var instance2 = new SubType();
// console.log(instance2.colors);

// =============组合继承================
// 最常用的模式
// function SuperType (name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }
// SuperType.prototype.sayName = function () {
//     console.log('name: ', this.name);
// }

// function SubType (name, age) {
//     // 继承属性
//     SuperType.call(this, name);
//     this.age = age;
// }
// // 继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function () {
//     console.log('age:', this.age)
// }

// var instance1 = new SubType('Wang', 29);
// instance1.colors.push('black');
// console.log(instance1.colors);
// instance1.sayName();
// instance1.sayAge();

// var instance2 = new SubType('Zhang', 30);
// console.log(instance2.colors);
// instance2.sayName();
// instance2.sayAge();

// =============原型式继承================
// ES5 标准了其方法 Object.create()
// function object (o) {
//     function F () {}
//     F.prototype = o;
//     return new F();
// }

// var person = {
//     name: 'Wang',
//     friends: ['x', 'y', 'z']
// }
// var aPerson = object(person);
// aPerson.name = 'Zhang';
// aPerson.friends.push('Rob');

// var yPerson = object(person);
// yPerson.name = 'Li';
// yPerson.friends.push('w');
// console.log(person.friends);

// ===寄生式继承===
// function createAnother (original) {
//     var clone = object(origin);
//     clone.sayHi = function () {
//         alert("hi")
//     }
//     return clone;
// }

// var anoutherPerson = createAnother(person);
// anoutherPerson.sayHi();

// =============寄生组合式继承================
// 最简单形式
function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype);    // 创建对象
    prototype.constructor = subType;    // 增强对象
    subType.prototype = prototype;     // 指定对象
}

function SuperType (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    alert(this.name);
}

function SubType (name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    alert(this.age)
}

SubType.prototype = new SuperType();

var instance = new SubType('Wang', 29);
instance.sayName()
instance.sayAge()