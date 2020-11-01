$('#test').click(function(argument) { 
  console.log(1); // 由于 while(true) 造成死循环，所以此处无法输出
}); 

setTimeout(function() {
  console.log(2); 
}, 0);

// !此处会造成死循环，如何解决？
while (true) {
  console.log(Math.random());
}