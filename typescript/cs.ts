class Person {
  constructor(public name:string){
  }
  eat(){
    console.log(this.name)
  }
}
var p = new Person('me')
p.eat()

class Employee extends Person {
  constructor(name:string, code:string){
     super(name)
     this.code = code
  }
  code: string;
   work(){
     super.eat()
     console.log(this.code)
   }
}
var e = new Employee('fx','D21138')
e.work()