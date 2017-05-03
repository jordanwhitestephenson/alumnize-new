
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employer').del()
    .then(function () {
      // Inserts seed entries
      return knex('employer').insert([
       {company_name:'Lockeed Martin', employer_adress:'12999 W Deer Creek Canyon Rd, Littleton, CO 80127'},
       {company_name:'Twitter',employer_adress:'1301 Walnut St, Boulder, CO 80302'},
       {company_name:'Google', employer_adress:'2590 Pearl St #110, Boulder, CO 80302'},
       {company_name:'Amazon',employer_adress:'1275 13th St, at Everyday Stores, Boulder, CO 80302'}
      ]);
    });
};


