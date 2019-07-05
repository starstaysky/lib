function getName(){
 this.a = 1
  setTimeout("alert(this)",100)
}
getName()
console.log(a)