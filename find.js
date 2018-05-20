const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) throw err;
  const db = client.db('learnyoumongo');
  db.collection('parrots').find({
    age: {
      $gt: Number(process.argv[2]),
    },
  }).toArray((error, docs) => {
    if (error) throw error;
    console.log(docs); // eslint-disable-line
    client.close();
  });
});
