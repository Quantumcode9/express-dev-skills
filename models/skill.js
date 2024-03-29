const skills = [
    { id: 1, name: 'JavaScript', description: 'Front-end and back-end programming' },
    { id: 2, name: 'HTML/CSS', description: 'Web page structure and styling' },
    { id: 3, name: 'Node.js', description: 'JavaScript back-end runtime' },
    { id: 4, name: 'Express', description: 'JavaScript back-end framework' },
    { id : 5, name: 'Git', description: 'Version control system' },
    { id: 6, name: 'GitHub', description: 'Hosting for Git repositories' },

    
  ];

function add(skillData) {
  const newId = skills.length > 0 ? Math.max(...skills.map(skill => skill.id)) + 1 : 1;
  const newSkill = { id: newId, ...skillData };
  skills.push(newSkill);
}

function remove(id) {
  id = parseInt(id);
  const index = skills.findIndex(skill => skill.id === id);
  if (index > -1) {
      skills.splice(index, 1);
  }
}

function update(id, updatedSkillData) {
  const index = skills.findIndex(skill => skill.id === parseInt(id));
  if (index !== -1) {
      skills[index] = { ...skills[index], ...updatedSkillData };
  }
}


  function findById(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function getAll() {
    return skills;
  }
  
  module.exports = {
    getAll,
    findById,
    add,
  remove,
  update
  };
  


    


