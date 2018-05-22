const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) throw err;
  const db = client.db('learnyoumongo');
  const docsCollection = db.collection('docs');
  docsCollection.insert({
    firstname: process.argv[2],
    lastname: process.argv[3],
  }, (error, docs) => {
    if (error) throw error;
    console.log(JSON.Stringify(docs)); // eslint-disable-line
    client.close();
  });
});
