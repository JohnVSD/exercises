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

//= 数组乱序 1
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function shuffle(a) {
  var len = a.length;
  var shuffled = [];
  var rand;
  for (var i = 0; i < len; i++) {
    rand = ~~(Math.random() * (i + 1));   // ~~ 截除数值的小数部分
    if (rand !== i) {
      shuffled[i] = shuffled[rand];
    }
    shuffled[rand] = a[i];
  }
  return shuffled;
}
//== 数组乱序 2
// arr.sort(function () {
//   return Math.random() > 0.5 ? -1 : 1;
// })
// console.log(arr)

//=== 数组乱序 3 
function shuffle_3 (arr) {
  var b = [];
  while (arr.length > 0) {
    var index = parseInt(Math.random() * (arr.length - 1));
    b.push(arr[index]);
    arr.splice(index, 1);
  }
  return b;
}

// 为数值添加千分符
var num = 12345678;
function fun (num) {
  num = num.toString();
  console.log(num)
}
fun(num)

// 实现一个forEach 
Array.prototype._forEach = function (fn) {
  for (var i=0; i<this.length; i++) {
    var item = this[i];
    fn(item, i, this);
  }
}