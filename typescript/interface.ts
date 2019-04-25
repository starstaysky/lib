
interface IPerson {
  name:string;
  age: number;
}
class Person {
  constructor(public config: IPerson){

  }
}
var p1 =  new Person({
  name:'fx',
  age:1
})