const pg = require("pg");
const settings = require("./settings"); // settings.json
const dataProcess = require("./functions")
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
const myArgs = process.argv.slice(2)[0]

/* const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
}); */


/* client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log('Searching ...');
  client.query("SELECT * FROM famous_people WHERE first_name = $1::text", [myArgs], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    dataProcess.printResults(result.rows, myArgs)
    client.end();
  });
}); */

knex.select('*').from('famous_people')
  .where({first_name: myArgs})
  .then(rows => {
    console.log('Searching ...');
    dataProcess.printResults(rows, myArgs)
  })
  .finally(function() {
    knex.destroy();
  })