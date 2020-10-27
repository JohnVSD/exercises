// ! 仔细去了解严格模式下与非严格模式的区别。

var num = 1;
function yideng() {
  "use strict";
  console.log(this.num++); // 严格模式下 this 指向是当前作用域。
}

function yideng2() {
  console.log(++this.num);
}

(function () {
  "use strict";
  yideng2(); // 2
})();

yideng(); // ! Cannot read property 'num' of undefined