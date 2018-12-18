/**
 * 算法
 */

//冒泡排序
var arr = [2,4,1,6,8,3,10,7,9];
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
  interval = interval || 300;
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
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//=数组乱序 1
// function shuffle(arr) {
//   var b = [];
//   while (arr.length > 0) {
//     // Math.random()随机返回 0~1 之间的数值
//     var index = parseInt(Math.random() * (arr.length - 1));
//     b.push(arr[index]);
//     arr.splice(index, 1);
//   }
//   return b;
// }
//== 数组乱序 2
// arr.sort(function () {
//   return Math.random() > 0.5 ? -1 : 1;
// })
// console.log(arr)

// 为数值添加千分符
function toThousands(num) {
  var num = (num || 0).toString(), result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    console.log(result)
    num = num.slice(0, num.length - 3);
  }
  if (num) { 
    result = num + result;
  }
  return result;
}
// var num = 1234567;
// console.log(toThousands(num))

// 实现一个forEach 
Array.prototype._forEach = function (fn) {
  for (var i=0; i<this.length; i++) {
    var item = this[i];
    fn(item, i, this);
  }
}

// 实现一个数组map方法
Array.prototype._map = function (fn) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    result[i] = fn.call(null, item, i, this);
  }
  return result;
}

//传入一个number，返回属于当前月份第几周
function week(y, m, d) {
  var date = new Date(y, m-1, d);
  var year = date.getFullYear();
  var month = date.getMonth();  // 从0开始，0表示1月，11表示12月
  var days = date.getDate();
  // 那一天是那一年的第多少天
  for(var i=1; i < m; i++ ){
    days += getMonthDays(year, i);
  }
  
  // 那一年的第一天是星期几
  var yearFirstDay = new Date(year, 0, 1).getDay();
  days += yearFirstDay;
  var week = Math.ceil(days / 7);
  return week
}
// 判断是否是闰年
function isLeapYear (year) {
  return (year % 400 == 0) || (year % 4 ==0 && year % 100 !== 0);
}
// 获取某年某月天数
function getMonthDays (year, month) {
  return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

// console.log('第', week(2018, 11, 4), '周')