//Arrow function cannot be used as function constructor, Exception: ... Is not a constructor

function Pyramidian(isu, firstname, lastname){
    this.isu=isu,
    this.firstname=firstname,
    this.lastname=lastname
} // This works fine

var pyramidian= new Pyramidian(1, "Souleymane", "Condé");

var Pyramidien= (isu, firstname, lastname)=>{
    this.isu=isu,
    this.firstname=firstname,
    this.lastname=lastname
}

// console.log(pyramidian)
console.log(new Pyramidien(1, "Souleymane", "Condé"))