const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) throw err;
  const db = client.db('learnyoumongo');
  const database = db.collection('parrots');
  database.count({
    age: {
      $gt: +process.argv[2],
    },
  }, (error, docs) => {
    if (error) throw error;
    console.log(JSON.Stringify(docs)); // eslint-disable-line
    client.close();
  });
});
