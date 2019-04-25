function func1() {
    return {
        name: 'fx',
        age: {
            now: 32
        }
    };
}
var _a = func1(), cname = _a.name, now = _a.age.now;
/* 数组的解构表达式 */
var arr = [1, 2, 3, 4];
var number1 = arr[0], number2 = arr[3];
console.log(number1);
console.log(number2);
