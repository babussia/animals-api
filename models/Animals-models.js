// Load the animal data from animals.json file
// This gives us a list (array) of all animals
const animals = require("../animals.json")

// We are making a class (blueprint) to work with animal data
class Animal {

    // This runs when we make a new Animal object
    // It takes one animal (with all its info) and stores it in this object
    constructor(animal) {
        this.id = animal.id;           
        this.name = animal.name;       
        this.genus = animal.genus;     
        this.family = animal.family;   
        this.order = animal.order;     
        this.traits = animal.traits;   
    }

    // 📌 STATIC METHOD:
    // 'static' means we can use this method directly from the class
    // Example: Animal.getAll() — we don’t need to create an Animal first

    // This method gets all animals
    static getAll() {
        // It makes each plain object into an Animal object
        return animals.map(a => new Animal(a));
    }

    // This method finds one animal by its ID
    static getById(id) {
        // Look for the animal that has the same ID
        const found = animals.find(animal => Number(animal.id) === Number(id));

        // If found, return it as an Animal object
        if (found) {
            return new Animal(found);
        } else {
            // If not found, show an error
            throw new Error("Animal not found");
        }
    }

    // This method creates (adds) a new animal to the list
    static create(animalData) {
        const newAnimal = animalData;                  // Get the data for the new animal
        newAnimal.id = animals.length + 1;             // Give it a new ID (1 more than the current list)
        animals.push(newAnimal);                       // Add the new animal to the list
        return new Animal(newAnimal);                  // Return it as an Animal object
    }

    // This method updates the current animal (the one we call it on)
    update(data) {
        // Look for the animal in the list with the same ID
        const existing = animals.find(a => Number(a.id) === Number(this.id));

        if (existing) {
            existing.name = data.name;       // Change the name to the new one
            existing.family = data.family;   // Change the family to the new one
            return new Animal(existing);     // Return the updated animal
        } else {
            throw new Error("Animal not found"); // If not found, show error
        }
    }

    // This method deletes (removes) the current animal from the list
    destroy() {
        // Find the animal with the same ID
        const deletedAnimal = animals.find(a => Number(a.id) === Number(this.id));

        if (deletedAnimal) {
            // Get the position of the animal in the array
            const index = animals.indexOf(deletedAnimal);
            // Remove it from the list
            animals.splice(index, 1);
        } else {
            throw new Error("Animal not found"); // If not found, show error
        }
    }
}

// Make the Animal class available to other files in the project
module.exports = Animal;
