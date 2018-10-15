/**
 * class 类练习
 */

// 《 you don't konw JS 》书中第4章 类
function mixin (sourceObj, targetObj) {
    for (var key in sourceObj ) {
        targetObj[key] = sourceObj[key]
    }
    return targetObj
}

var objA = {
    a: 2,
    b: function () {
        console.log('哈哈哈 你好', this.a)
    }
}
// var objB = objA
var objB = mixin(objA, {})
console.log(objB)
console.log(objB.b())
var objC = {
    wheels: 4,
    b: function () {
        console.log('切切切 你不好', this.wheels)
    }
}
mixin(objC, objB)
console.log(objB)
console.log(objB.b())
// // var objB = Object.assign({}, objA)
// console.log(objA)
// objB.a = 4
// console.log(objA)
// objB.b = 3
// console.log(objA)
// console.log(objB)