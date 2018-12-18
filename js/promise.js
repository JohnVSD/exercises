/**
 * Promise 练习
 */

// =========================================== 八段代码掌握Promise ===================================
/**
 * 1.Promise的立即执行性
 * Promise对象表示未来某个将要发生的事件，但在创建（new）Promise时，作为Promise参数传入的函数是会被立即执行的，
 * 只是其中执行的代码可以是异步代码。
 * 有些同学会认为，当Promise对象调用then方法时，Promise接收的函数才会执行，这是错误的。
 * 因此，代码中"create a promise"先于"after new Promise"输出。
 */
// var p = new Promise(function (resolve, reject) {
//     console.log("create a promise");
//     resolve("success");
// });

// console.log("after new Promise");

// p.then(function (value) {
//     console.log(value);
// })

/**
 * 2.Promise 三种状态
 */
// var p1 = new Promise(function (resolve, reject) {
//     resolve(1);
// });
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(2);
//     }, 500);
// });
// var p3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(3);
//     }, 500);
// });

// console.log(p1);
// console.log(p2);
// console.log(p3);
// setTimeout(function () {
//     console.log(p2);
// }, 1000);
// setTimeout(function () {
//     console.log(p3);
// }, 1000);

// p1.then(function (value) {
//     console.log(value);
// });
// p2.then(function (value) {
//     console.log(value);
// });
// p3.catch(function (err) {
//     console.log(err);
// })

/**
 * 3.Promise 状态的不可逆性
 */
// var p1 = new Promise((resolve, reject) => {
//     resolve('success1')
//     resolve('success2')
// })

// var p2 = new Promise((resolve, reject) => {
//     resolve('success3')
//     reject('reject')
// })

// p1.then(val => {
//     console.log(val)
// })

// p2.then(val => {
//     console.log(val)
// })

/** 
 * 4.链式调用
 */
// var p1 = new Promise((resolve, reject) => {
//     resolve(1);
// })

// p1.then(val => {
//     console.log(val);
//     return val*2
// }).then(val => {
//     console.log(val);
// }).then(val => {
//     console.log(val);
//     return Promise.resolve('resolve');
// }).then(val => {
//     console.log(val);
//     return Promise.reject('reject');
// }).then(val => {
//     console.log(`resolve= ${val}`)
// }, err => {
//     console.log(`reject= ${err}`)
// })

/**
 * 5.Promise then() 回调异步性
 *  Promise接收的函数是同步执行的，
 *  但是then中的回调函数的执行则是异步的。
 *  所以 success 会最后执行
 */
// var p1 = new Promise((resolve, reject) => {
//     resolve('success');
// })

// p1.then(val => {
//     console.log(val);
// })

// console.log('我先执行')

/**
 * 6、Promise 中的异常
 * Promise中的异常由then参数中第二个回调函数（Promise执行失败的回调）处理，
 * 异常信息将作为Promise的值。异常一旦得到处理，then返回的后续Promise对象将恢复正常，
 * 并会被Promise执行成功的回调函数处理。另外，需要注意p1、p2 多级then的回调函数是交替执行的 ，
 * 这正是由Promise then回调的异步性决定的。
 */
// var p1 = new Promise((resolve, reject) => {
//     foo.bar();
//     resolve(1);
// })

// p1.then(
//     val => {
//         console.log('p1 then value: ' + val);
//     }, err => {
//         console.log('p1 then err: ' + err);
//     }
// ).then(
//     val => {
//         console.log('p1 then then value: ' + val);
//     }, err => {
//         console.log('p1 then then err: ' + err);
//     }
// )

// var p2 = new Promise((resolve, reject) => {
//     resolve(2);
// })

// p2.then(
//     val => {
//         console.log('p2 then value: ' + val);
//         foo.bar();
//     }, err => {
//         console.log('p2 then err: ' + err);
//     }
// ).then(
//     val => {
//         console.log('p2 then then value: ' + val);
//     }, err => {
//         console.log('p2 then then err: ' + err);
//         return 1;
//     }
// ).then(
//     val => {
//         console.log('p2 then then then value: ' + val);
//     }, err => {
//         console.log('p2 then then then err: ' + err);
//     }
// )

/**
 * 7、Promise.resolve()
 * Promise.resolve(...)可以接收一个值或者是一个Promise对象作为参数。
 * 当参数是普通值时，它返回一个resolved状态的Promise对象，对象的值就是这个参数；
 * 当参数是一个Promise对象时，它直接返回这个Promise参数。
 * 因此，p1 === p2。但通过new的方式创建的Promise对象都是一个新的对象，因此后面的三个比较结果都是false。
 * 另外，为什么p4的then最先调用，但在控制台上是最后输出结果的呢？
 * 因为p4的resolve中接收的参数是一个Promise对象p1，resolve会对p1”拆箱“，获取p1的状态和值，但这个过程是异步的。
 */
// var p1 = Promise.resolve(1);
// var p2 = Promise.resolve(p1);
// var p3 = new Promise((resolve, reject) => {
//     resolve(1);
// })
// var p4 = new Promise((resolve, reject) => {
//     resolve(p1);
// })

// console.log(p1 === p2);
// console.log(p1 === p3);
// console.log(p1 === p4);
// console.log(p3 === p4);

// p4.then(val => {
//     console.log('p4 val：' + val);
// })
// p2.then(val => {
//     console.log('p2 val：' + val);
// })
// p1.then(val => {
//     console.log('p1 val：' + val);
// })

/**
 * 8、resolve 和 reject
 * Promise回调函数中的第一个参数resolve，会对Promise执行"拆箱"动作。
 * 即当resolve的参数是一个Promise对象时，resolve会"拆箱"获取这个Promise对象的状态和值，但这个过程是异步的。
 * p1"拆箱"后，获取到Promise对象的状态是resolved，因此fulfilled回调被执行；
 * p2"拆箱"后，获取到Promise对象的状态是rejected，因此rejected回调被执行。
 * 但Promise回调函数中的第二个参数reject不具备”拆箱“的能力，reject的参数会直接传递给then方法中的rejected回调。
 * 因此，即使p3 reject接收了一个resolved状态的Promise，then方法中被调用的依然是rejected，
 * 并且参数就是reject接收到的Promise对象。
 */
var p1 = new Promise((resolve, reject) => {
    resolve(Promise.resolve('resolve'));
})
var p2 = new Promise((resolve, reject) => {
    resolve(Promise.reject('reject'));
})
var p3 = new Promise((resolve, reject) => {
    reject(Promise.resolve('resolve'));
})

p1.then(val => {
    console.log('p1 fulfiled: ' + val);
}, err => {
    console.log('p1 rejected: ' + err);
})

p2.then(val => {
    console.log('p2 fulfiled: ' + val);
}, err => {
    console.log('p2 rejected: ' + err);
})

p3.then(val => {
    console.log('p3 fulfiled: ' + val);
}, err => {
    console.log('p3 rejected: ' + err);
})