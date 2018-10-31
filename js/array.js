/**
 * 数组常用方法
 */
var arr = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
var filterR = arr.filter(function(item, index, array){
    return item > 2;
})
// console.log(filterR)
var mapR = arr.map(function (item, index, array) {
    return item + 2;
})
// console.log(mapR)

var center = Math.floor(arr.length / 2) // Math.floor 对数值进行向下取整
//var center2 = parseInt(arr.length / 2)  // parseInt 解析一个字符串，返回一个整数
var index = arr.splice(center, 1)[0]
// console.log(index)

window.startTime = Date.now();
console.log(window.startTime)