const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

// Route to display all skills 
router.get('/', skillsController.index);

// Route to display the form for adding a new skill
router.get('/new', (req, res) => {
    res.render('skills/new');
});


router.get('/show', (req, res) => {
    res.render('/show');
});


// Route to handle the creation of a new skill 
router.post('/', skillsController.create);

// display a specific skill (
router.get('/:id', skillsController.show);

// the deletion of a skill 
router.delete('/:id', skillsController.delete);

router.put('/:id', skillsController.update);


module.exports = router;

