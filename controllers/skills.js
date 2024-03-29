const Skill = require('../models/skill');
const skillModel = require('../models/skill');

exports.index = (req, res) => {
    const allSkills = skillModel.getAll();
    res.render('skills/index', { skills: allSkills });
};


exports.show = (req, res) => {
    const skill = skillModel.findById(req.params.id);
    if (skill) {
        res.render('skills/show', { skill });
    } else {
        res.status(404).send('Skill not found');
    }
};

exports.edit = (req, res) => {
    const skill = skillModel.findById(req.params.id);
    if (skill) {
        res.render('skills/edit', { skill });
    } else {
        res.redirect('/skills');
    }
};

exports.update = (req, res) => {
    skillModel.update(req.params.id, req.body);
    res.redirect('/skills');
}

exports.new = (req, res) => {
    res.render('skills/new');
}

exports.create = (req, res) => {
    skillModel.add(req.body);
    res.redirect('/skills');
};

exports.delete = (req, res) => {
    skillModel.remove(req.params.id);
    res.redirect('/skills');
};
