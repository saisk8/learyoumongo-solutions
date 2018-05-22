const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) throw err;
  const db = client.db(process.argv[2]);
  const users = db.collection('users');
  users.update({
    username: 'tinatime',
  }, {
    $set: {
      age: 40,
    },
  }, (error, docs) => {
    if (error) throw error;
    console.log(JSON.Stringify(docs)); // eslint-disable-line
    client.close();
  });
});
