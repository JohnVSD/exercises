
function ajax(url, data, callback) {
  // ...
  console.warn('ajax 请求：', url, data, callback);
}

// ajax的偏函数。是一个和减少函数参数个数的过程。
function getPerson(data, cb) {
  ajax("http://some.api/person", data, cb);
}

// 这就是函数式。
function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs){
    return fn( ...presetArgs, ...laterArgs);
  }
}

// 传一个返回一个
function identity(v) {
  return v;
}

// var words = " Now is the time for all... ".split(/\s|\b/);
// console.log(JSON.stringify(words));
// console.log(JSON.stringify(
//   words.filter(identity)
// ));

// * ======================================函数式编程常见案例===================================

// todo 1、组合函数
function compose(f, g) {
  return function () {
    return f.call(this, g.apply(this, arguments));
  }
}

function toLocaleUpperCase(str) {
  return str.toLocaleUpperCase();
}

function toSigh(str) {
  return `${str}!`;
}

const composedFn = compose(toSigh, toLocaleUpperCase);
// console.log(composedFn('hello world'));

// todo 2、柯里化 将一个多参数函数转化为多个嵌套的单参数函数
// ! 不懂，要慢慢理解
function curry(targetFn) {
  const numOfArgs = targetFn.length;
  return function fn(...rest) {
    console.log('rest是什么：', ...rest);
    if (rest.length < numOfArgs) {
      // 递归操作
      return fn.bind(null, ...rest);
    } else {
      return targetFn.apply(null, rest);
    }
  }
}

function add(a, b, c, d) {
  return a + b + c + d;
}
// console.log('原函数：', add(1,2,3,4));
// console.log('柯里化：', curry(add)(1)(2)(3)(4));

// todo 3、偏函数 存一部分参数，让另一部分参数在使用是传入
function isTypeX(type) {
  return function(obj) {
    console.log(obj, Object.prototype.toString.call(obj));
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  }
}

const isObject = isTypeX('Object');
const isNumber = isTypeX('Number');

console.log('偏函数测试1：', isObject({a: 1}));
console.log('偏函数测试2：', isNumber(123));

// todo 4、惰性求值 预先定义多个操作，但不立即求值，在需要使用时才去求值，可以避免不必要的求值提升性能。
// 待补充实例

// todo 5、高阶函数 可以加工函数的函数（接收一个或多个函数输入，输出一个函数）。
// 待补充实例

// todo 6、递归和尾递归
// 普通递归，控制函数循环调用的一种方式
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log('没有使用尾递归，导致栈溢出：', fibonacci(100));

// 尾递归，避免多层级函数嵌套导致的内存溢出的优化
function fibonacci2(n, result, preValue) {
  if (n == 0) {
    return result;
  }
  return fibonacci2(n - 1, preValue, result + preValue);
}
// result = 0, preValue = 1
console.log('使用了尾递归调用优化：', fibonacci2(100, 0, 1));