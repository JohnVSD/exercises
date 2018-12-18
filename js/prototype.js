/**
 * 原型，[[prototype]]
 */

// ============================================
// var another = {
//     a: 2
// }
// var myObject = Object.create(another)

// for (var key in myObject) {
//     console.log(key)
// }
// console.log('a' in myObject)
// console.log(myObject)

// function foo () {
//     this.a = 2
//     this.b = 3
// }

// var bar = new foo()
// console.log(foo)

// ============================================
// function Person () {
//     this.name = 'John'
// }
// Person.prototype.getName = function () {
//     return this.name
// }
// Person.prototype = new Array

// var person = new Person()

// alert(person)
// ============================================
// function SuperType () {
//     this.property = true
// }
// SuperType.prototype.getSuperValue = function () {
//     return this.property
// }

// function SubType () {
//     this.subProperty = false
// }
// SubType.prototype = new SuperType() // 继承自SuperType
// SubType.prototype.getSubValue = function () {
//     return this.subProperty
// }

// var instance = new SubType()    // 拥有以上所有属性；
// console.log(instance)
// console.log(instance.constructor)
// console.log(instance.getSuperValue())
// console.log(instance.getSubValue())

// ============================================
// var arr = new Array
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// console.log(arr)
// console.log(arr instanceof Array)

// ==============构造函数A的实例继承构造函数B的实例=================
// function inhert (a, b) {

// }


