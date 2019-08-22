
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tanks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tanks').insert([
        {id: 1, litres: '50', img:'image url goes here'},
        {id: 2, litres: '70', img: 'image url goes here'},
        {id: 3, litres: '120', img: 'image url goes here'},
        {id: 4, litres: '170', img: 'image url goes here'}
      ]);
    });
};
