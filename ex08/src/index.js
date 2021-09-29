class Person  {

    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    getPerson() {

        var personInfo = "Name: "+this._name+", email: "+this._email+", age: "+this._age;

        return personInfo;
    }
    
}
let name = new Person ("nihad","kadic@gmail.com",23);
console.log(name.getPerson());
module.exports = Person;