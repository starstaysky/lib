var a = 0
var obj = {
  a:1,
  b1:this,
  b2:()=>this.a
}
console.log(obj.b1)
console.log(obj.b2())