const settings = require("./settings"); // settings.json
const dataProcess = require("./functions");
const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});
const myArgs = process.argv.slice(2);

knex('famous_people')
  .insert({
    first_name: myArgs[0],
    last_name: myArgs[1],
    birthdate: myArgs[2]
  })
  .then(console.log(`Added ${myArgs[0]} ${myArgs[1]} born on ${myArgs[2]}`))
  .finally(function() {
    knex.destroy();
  })

