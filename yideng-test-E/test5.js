var a = {}, 
    b = { key: 'b' }, // 引用类型，存在堆区
    c = { key: 'c' };
a[b] = 123; // 基本类型 存在栈区
a[c] = 456;
console.log(a[b]); // ! 456
console.log(Symbol(b) == Symbol(b)); // false，因为是两个堆地址。