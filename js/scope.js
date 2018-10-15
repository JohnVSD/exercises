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
var value1 = 0, value2 = 0, value3 = 0;
for (var i = 1; i <= 3; i++) {
    var i2 = i;
    (function () {
        var i3 = i;
        setTimeout(function () {
            value1 += i;
            value2 += i2;
            value3 += i3;
        }, 1);
    })();
}
setTimeout(function () {
    console.log(value1, value2, value3);
}, 0);