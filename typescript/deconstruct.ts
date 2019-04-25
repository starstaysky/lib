function func1(){
  return {
    name: 'fx',
    age:{
      now:32
    }
  }
}

let {name:cname,age:{now}} = func1()
/* 数组的解构表达式 */
var arr = [1,2,3,4]
let [number1,number2, ...others] = arr
console.log(number1)
console.log(number2)
console.log(others)
/*初始化变量可以用更少的代码 */