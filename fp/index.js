
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