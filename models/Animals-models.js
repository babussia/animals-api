const animals = require("..animals.json/")


class Animal {
    constructor(animal){
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.traits = fruit.traits; 
    }

    static getAll(){
        return animals.map(animal => new Animal(animal))
    }

    static getById (){
        return animals.find((animals) => animal.id == id)
    
    }

}