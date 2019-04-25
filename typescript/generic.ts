class Person {
  constructor(public name:string){
  }
  eat(){
    console.log(this.name)
  }
}
class Women extends Person{
    constructor(name: string, sex: string){
      super(name),
      this.sex = sex
    }
    sex:string;
    sayWomen(){
       super.eat()
       console.log(this.sex)
    }
}
var females :Array<Person> = []
var p = new Person('xsj')
females[0] = new Women('fx','female')
p.eat()
