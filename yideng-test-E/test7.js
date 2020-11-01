/**
 * 请按照要求作答，并解释原理？
 * ! 请解释一下 bable 编译后的 async 的原理
 */ 
// todo 1
// let a = 0;
// let yideng = async() => { 
//   // async 异步代码 属于 microtask(微任务) 主线程之后执行
//   a = a + await 10; // ! 没搞清楚 + 的作用；
//   console.log(a); // 10
// }
// yideng();
// console.log(++a); // 1 同步代码在主线程 优先执行

// todo 2 加强一下
async function async1() {
  console.log(1);
  await async2();
  console.log(3); // 等待执行
}
async function async2() {
  console.log(2); // await 属于 promise（microtask），内部代码会立即执行
}
async1();
console.log(4); // 输出顺序：1 2 4 3