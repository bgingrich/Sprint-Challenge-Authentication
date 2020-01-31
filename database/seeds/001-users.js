exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Billy', password: "test123"},
        {id: 2, username: 'Joe', password: "test123"},
        {id: 3, username: 'Bobby', password: "test123"}
      ]);
    });
}; 