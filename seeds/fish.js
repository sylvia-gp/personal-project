
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fish').del()
    .then(function () {
      // Inserts seed entries
      return knex('fish').insert([
        {id: 1, image: '', species: 'Angelfish', quantity: '1', tank_id: '4'},
        {id: 2, image: 'sparkling-gourami.jpg', species: 'Sparkling Gourami', quantity: '6', tank_id: '3'},
        {id: 3, image: 'pea-puffer.jpg', species: 'Pea Puffers', quantity: '3', tank_id: '2'},
        {id: 4, image: 'pygmy-cory.jpg', species: 'Pygmy Corys', quantity: '8', tank_id: '1'},
        {id: 5, image: 'albino-bristlenose.jpg', species: 'Albino Long-finned Bristlenoses', quantity: '2', tank_id: '4'},
        {id: 6, image: 'rio-salinas.jpg', species: 'Rio Salinas Corys', quantity: '8', tank_id: '3'},
        {id: 7, image: 'black-orchid-betta.jpg', species: 'Black Orchid Crowntail Betta', quantity: '1', tank_id: '1'},
      ]);
    });
};
