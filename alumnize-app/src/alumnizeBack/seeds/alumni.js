
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alumni').del()
    .then(function () {
      // Inserts seed entries
      return knex('alumni').insert([
        {name:'Paul VanDyke', cohort:'g43', graduation_date:'06/21/2017', employed: true, employer:'Lockeed Martin', hire_date:'06/22/2017'},
        {name:'Paul Torres', cohort:'g43', graduation_date:'06/21/2017', employed: true, employer:'Google', hire_date:'06/22/2017'},
        {name:'Anita Khedkar', cohort:'g43', graduation_date:'06/21/2017', employed: true, employer:'Twitter', hire_date:'06/22/2017'},
        {name:'Jordan Sthpheson', cohort:'g43', graduation_date:'06/21/2017', employed: true, employer:'Amazon', hire_date:'06/22/2017'}
      ]);
    });
};
