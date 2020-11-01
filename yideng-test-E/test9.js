/**
 * todo 1、如下代码执行结果。
 * todo 2、ES5 实现 ES6 Promise A+规范代码。
 * todo 3、解释下如何使用 Promise 完成事务的操作。
 */
// Promise 关键知识点 resolve 只会执行一次
const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1); // 宏任务，最后执行，又因为前面已经有一个 resolve 了，所以此处不会执行。
    })
    console.log(2);
    resolve(3);
  })
  innerpro.then(res => console.log(res));
  resolve(4);
  console.log('yideng');
});
pro.then(res => console.log(res));
console.log('end'); 
// * 输出顺序：2、yideng、end、3、4