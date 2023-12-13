const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');
const skillModel = require('../models/skill');



router.get('/', (req, res) => {
  const skills = skillModel.getAll();
  res.render('skills/index', { skills });
});

module.exports = router;


router.get('/', skillsController.index);
router.get('/:id', skillsController.show);

module.exports = router;