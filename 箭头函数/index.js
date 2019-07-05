// var age = 2
// function getname(){
//   console.log(age)
// }
// function Person() {
//  'use strict' 
//   // 构造函数 Person() 定义的 `this` 就是新实例对象自己
//   this.age = 0;
//   getname()
//   setTimeout(function growUp() {
//     // 在非严格模式下，growUp() 函数定义了其内部的 `this`
//     // 为全局对象, 不同于构造函数Person()的定义的 `this`
//     age++; 
//     console.log(age)
//   }, 1000);
// }
// var p = new Person()
// console.log(p.age)
var a =2
var f = () => {'use strict';this.a=1; return this};
let result = f()
console.log(result)

/**此处考点： 
 * 箭头函数与use strict的关系： 箭头函数的this只是词法层面，严格模式下失效
 * use strict 模式下，函数如果在外部申请，this指向原来的作用于
 * setTimeout内的函数，指向window
 * */
/** 使用 call 或 apply 调用 对箭头函数的影响*/ 

// var obj = {
//    a:1,
//    base:1,
//    c:43,
//    fn:function(a){
//      var f = v=>v+this.a;
//      return f(a)
//    },
//    addThruCall: function(a) {
//     var f = v => v + this.base;
//     var b = {
//       base : 2,
//       f:v=>v+this.base
//     };
            
//     return f.call(b, a);}

 
// }
// var obj2 = {
//     a:'a',
//     c:2,
//     fn:function(){
//       console.log(this.c+"me")
//     }
// }
// let t = obj.fn.call(obj2,1)
// console.log(t+'obj')
// console.log(obj.addThruCall(1))
// obj2.fn.call(obj)