const Skill = require('../models/skill');

function index(req, res) {
const allSkills = Skill.getAll();
res.render('skills/index', { skills: allSkills });
}



function show(req, res) {
    const skill = Skill.findById(req.params.id);
    if (skill) {
      res.render('skills/show', { skill });
    } else {
      res.redirect('/skills');
    }
  }
  
  module.exports = {
    index,
    show,
  };


  

