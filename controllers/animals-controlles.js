// Import the Animal class so we can use its methods (getAll, getById, etc.)
const Animal = require("../models/Animals-models");

//  GET all animals
// We use `async` because we are doing something that might take time (reading data).
const index = async (req, res) => {
    try {
        // `await` tells the code to pause here until Animal.getAll() is done
        const allAnimals = await Animal.getAll();

        // After waiting, we send the list of animals back to the client
        res.status(200).send(allAnimals);
    } catch (err) {
        // If something goes wrong, send a 500 (server error)
        res.status(500).send({ error: "Server error" });
    }
};

//  GET one animal by its ID
const show = async (req, res) => {
    const id = Number(req.params.id); // Get the ID from the URL (e.g., /animals/3)
    try {
        // Wait until we find the animal with that ID
        const animal = await Animal.getById(id);

        // Send back the animal
        res.status(200).send(animal);
    } catch (err) {
        // If not found, send a 404 error
        res.status(404).send({ error: err.message });
    }
};

//  POST - Create a new animal
const create = async (req, res) => {
    try {
        // Wait for the animal to be created using data from the request
        const newAnimal = await Animal.create(req.body);

        // Send back the new animal with status 201 (created)
        res.status(201).send(newAnimal);
    } catch (err) {
        // If something goes wrong, send 409 (conflict or error)
        res.status(409).send({ error: err.message });
    }
};

//  PUT/PATCH - Update an existing animal
const update = async (req, res) => {
    const id = Number(req.params.id); // Get ID from the URL
    try {
        // First, wait to find the animal by its ID
        const animal = await Animal.getById(id);

        // Then, wait to update it using the new data
        const updated = await animal.update(req.body);

        // Send back the updated animal
        res.status(200).send(updated);
    } catch (err) {
        // If not found, send a 404
        res.status(404).send({ error: err.message });
    }
};

//  DELETE - Remove an animal
const destroy = async (req, res) => {
    const id = Number(req.params.id); // Get the ID from the URL
    try {
        // Wait to find the animal first
        const animal = await Animal.getById(id);

        // Wait for the deletion to finish
        await animal.destroy();

        // Respond with status 204 (success, but no content to send back)
        res.sendStatus(204);
    } catch (err) {
        // If not found, send 404 error
        res.status(404).send({ error: err.message });
    }
};

// Export all controller functions so they can be used in routes
module.exports = { index, show, create, update, destroy };

