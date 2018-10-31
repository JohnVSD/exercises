/**
 * 算法
 */

//冒泡排序
function bubble_sort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
    }
  }
}

//快速排序
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }

  var pivotIndex = Math.floor(arr.length / 2);  // 取数组中间索引
  var pivot = arr.splice(pivotIndex, 1)[0]; // 取数组中间值

  var left = [];
  var right = [];
  for( var i=0; i<arr.length; i++ ){
    if(arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

/**
 * 二分查找 
 * 描述：在有序数组中查找指定值
 * 非递归
 */ 
function binary_search1 (arr, key) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    // var mid = parseInt(start + (end - start) / 2);
    var mid = parseInt((end + start) / 2);
    console.log(mid)
    if (arr[mid] == key) {
      return mid
    } else if (key > arr[mid]) {
      start = mid+1
    } else {
      end = mid-1
    }
  }
  return -1
}
// 二分查找 递归
function binary_search2 (arr, start, end, key) {
  if (arr.length <= 1) { return arr }
  if (start <= end) {
    var mid = parseInt((start + end) / 2)
    if (arr[mid] == key) {
      return mid
    } else if (key > arr[mid]) {
      return binary_search2(arr, mid+1, end, key)
    } else if (key < arr[mid]) {
      return binary_search2(arr, start, mid-1, key)
    }
  } else {
    return -1
  }
}
var arr = [1, 2, 3, 4, 5, 6, 8, 10, 12];
console.log(binary_search2(arr, 0, arr.length-1, 10))

//节流
function throttle (fn, interval) {
  interval = arguments[1] ? arguments[1] : 300;
  var canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      console.log('滚动结束')
      fn.apply(this, arguments);
      canRun = true;
    }, interval)
  }
}

// 数组去重
function unique (arr) {
  var result = [];
  for( var i=0; i<arr.length; i++ ){
    if(result.indexOf(arr[i]) == -1){
      result.push(arr[i])
    }
  }
  return result
}

//js实现每次调用一个函数自动加1
var count = (function () {
  var a = 0;
  return function () {
    return a++
  }
})()
console.log(count())
console.log(count())
console.log(count())
console.log(count())

var left = 1;
setTimeout(function () {
  if (left < 10) {
    left ++ 
    setTimeout(arguments.callee, 50);
    console.log(left)
  }
}, 50);