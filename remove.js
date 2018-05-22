const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) throw err;
  const db = client.db(process.argv[2]);
  const database = db.collection(process.argv[3]);
  const id = process.argv[4];
  database.remove({
    _id: id,
  }, (error, docs) => {
    if (error) throw error;
    console.log(JSON.Stringify(docs)); // eslint-disable-line
    client.close();
  });
});
