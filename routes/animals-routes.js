const express = require('express');
const router = express.Router();
//express is the web framework you’re using to build the API.
// express.Router() helps organize your routes (cleaner than putting everything in one place).

//import controller
const animals = require('../controllers/animals-controlles')
//this imports the controller file.
//now we can use functions like data.index(), data.show(), etc. when visiting a URL.

//define the routes Each of these tells Express:
//“When someone makes a request to this URL, call this function.”

router.get('/', animals.index); //When someone goes to /data, this runs data.index() — which shows all people.
router.get('/:id', animals.show ); //When someone goes to /data/:id, this runs data.show() — which shows one person by id.
router.post('/', animals.create ); //When someone goes to /data, this runs data.create() — which creates a new person.
router.patch('/:id', animals.update); //When someone goes to /data/:id, this runs data.update() — which updates a person.
router.delete('/:id', animals.destroy); //When someone goes to /data/:id, this runs data.destroy() — which deletes a person.

module.exports = router //This makes router available to be used in the main app file (app.js or index.js usually).