const username: string = 'felipe';

//function tipo 1
function resta(a: number, b:number){
  return a - b;
}

//Function tipo arrow Function
const sum = (a: number,b: number) => {
  return a + b;
}
sum(2,3);

// Clase en typescript
class Person{

  private age: number;
  private lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
}

//Instanciando Objeto
const felipe = new Person(28,"Quiceno");
