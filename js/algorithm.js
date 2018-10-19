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

  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex, 1)[0];

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

// 二分查找
function query (arr, key) {
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

//节流
function throttle(fn, interval) {
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