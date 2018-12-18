/**
 * 2018-10-9
 * 作用域 与 闭包 输出问题
 */

// ===========================================================
// for(var i=0; i<5; i++){
// 	console.log(i)
// }
// console.log(i)

// ===========================================================
// var a = 1;

// function fun () {
// 	console.log("1:", a);
// 	var a = 2;
// 	bar() 	// 会沿着函数定义的位置的作用域链向上查找
// 	console.log("2:", a);
// }

// function bar () {
// 	console.log("3:", a);
// }

// fun()

// ===========================================================
// var a = 1;

// function fun (fn) {
// 	var a = 2;
// 	return fn;
// }

// function bar () {
// 	console.log(a);
// }

// var fn1 = fun(bar);
// fn1()

// ===========================================================
// var a = 1;
// function fun () {
// 	var a= 2;
// 	return function () {
// 		console.log(a)
// 	}
// }

// var f1 = fun();
// f1()

// ===========================================================
// function fun () {
//     var result = new Array()
//     for (var i=0; i<10; i++) {
//         result[i] = function () {
//             return i
//         }
//     }
//     return result;
// }

// var n = fun ()
// for (var i=0; i<n.length; i++) {
//     console.log(n[i]())
// }

// ===========================================================
// var a =1; 
// function fac(){
//     a=3;
//     return;
//     function a(){}
// }
// fac()
// console.log(a)

// ===========================================================
// a = 1;
// var obj = {
//     a:2,
//     fuc: {
//         a: 3,
//         m: function () {
//             return this.a
//         }
//     }
// }
// var fun = obj.fuc.m
// console.log( fun() )
// console.log( obj.fuc.m() )

// ===========================================================
// function outher() {
//     function inner() {
//         var b = 234;
//         a = 0;
//     }
//     var a = 24
//     inner()

//     console.log(a)
//     console.log(b)
// }
// outher()

// ===========================================================
// var value1 = 0, value2 = 0, value3 = 0;
// for (var i = 1; i <= 3; i++) {
//     var i2 = i;
//     (function () {
//         var i3 = i;
//         setTimeout(function () {
//             value1 += i;
//             value2 += i2;
//             value3 += i3;
//         }, 1);
//     })();
// }
// setTimeout(function () {
//     console.log(value1, value2, value3);
// }, 0);

// ===========================================================
// window.setTimeout(function () {
//     console.log("1")
// }, 1);
// window.setTimeout(function () {
//     console.log("2")
// }, 2);
// window.setTimeout(function () {
//     console.log("2")
// }, 3);
// window.requestAnimationFrame(function () {
//     console.log("4")
// }, 4);

// ===========================================================
// function count() {
//     var num = 1;
//     console.log('第一次')
//     return function () {
//         // num++
//         console.log(num++)
//     }
// }
// var num2 = count();
// num2()
// num2()
// num2()
// ===========================================================
// var scope = 'global scope';
// function checkScope() {
//     var scope = 'local scope';
//     return new Function('return scope');
// }
// var a = new Function()
// console.log(a)
// var n;
// n = 1+2;
// console.log(n)
// n = 2+3;
// console.log(n)

// ===========================================================
// 考虑变量与函数提升
// var m = 2, a = b = 0;
// function add(n) {
//     return n = n + 1;
// }
// x = add(m);
// function add(n) {
//     return n = n + 3;
// }
// y = add(m);
// console.log(x)
// console.log(y)

// ===========================================================
// var length = 20;
// function fun () {
//     alert(this.length);
// }
// var obj = {
//     a: 1,
//     length: 5,
//     method: function (fn) {
//         fn();
//         arguments[0](); // arguments 本身有length属性，所以是1
//     }
// }
// obj.method(fun)

// ===========================================================
// alert(typeof (null)) // object
// alert(typeof (undefined)) // undefined
// alert(typeof (NaN)) // number
// alert(NaN === undefined) //false
// alert(1 + 2 + '3' + 4) // 334
// var a = '1234fg';
// console.log(typeof a)
// a++
// console.log(a)
// console.log(typeof a)
// console.log('a' == new String('a'))
// console.log('a' === new String('a'))

// ===========================================================
// 考虑提升
// var x=1, y=0, z=0;
// var add = function (x) {
//     return x = x + 1;
// }
// y = add(x)
// function add (x) {
//     return x = x + 3;
// }
// z = add(x)
// console.log(x, y, z)

// ***========================*==============================*
// var num = 1;
// var myObject = {
//     num: 2,
//     add: function () {
//         this.num = 3;
//         (function () {
//             console.log(this.num)
//             this.num = 4
//         })()
//         console.log(this.num)
//     },
//     sub: function () {
//         console.log(this.num)
//     }
// }
// myObject.add()
// console.log(myObject.num)
// console.log(num)
// var sub = myObject.sub;
// sub() 

// ***========================*==============================*
// var i = 0;
// for (i = 0; i++<3;) {
//     setTimeout(function () {
//         return function () { console.log(i) }
//     }(), 0)
// }

// ========================*==============================
// var a = 2;
// var obj = {
//     a: 1,
//     b: this.a,
//     c: function () {
//         console.log(this.b)
//     }
// }
// obj.c()

// ========================*==============================
// function Test () {}
// var test = new Test();
// console.log(Function.prototype)
// console.log(test.__proto__)
// console.log(test.__proto__ === Test.prototype)
// console.log(test.__proto__ === Function.prototype)
// console.log(Test.__proto__ === Object.prototype)
// console.log(test.__proto__ === Object.prototype)
// console.log(test.__proto__.__proto__ === Object.prototype)
// console.log(Test.prototype.__proto__ === Object.prototype)

// ========================this 指向==============================
// ---简单硬绑定---
// function foo () {
//     alert(this.name)
// }

// var b = {
//     name: '李磊'
// }

// // 硬绑定；this指向不会再被改变
// var bar = function () {
//     foo.call(b)
// }

// var name = '王和平'

// bar()

// --- 辅助函数 ---
function foo (num) {
    console.log(this.a, num);
    return this.a + num;
}

var obj = {
    a: 2
}

function bind (fn, obj) {
    return function () {
        return fn.apply(obj, arguments);
    }
}

var bar = bind(foo, obj);
var b = bar(3);
console.log(b)

// 由于硬绑定是一种常用的方式，所以ES5将其标准化，提供了内置方法 Funtion.prototype.bind，用法如下
var bar = foo.bind(obj);
var b = bar(4);
console.log(b);