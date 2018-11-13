module.exports = {
  printResults: function (data, userArg) {
    console.log(`Found ${data.length} person(s) by the name ${userArg}:`);
    data.forEach(item => {
      console.log(`- ${item.id}: ${item.first_name} ${item.last_name}, born ${item.birthdate.toISOString().slice(0, 10)}`);
    })
  }
}