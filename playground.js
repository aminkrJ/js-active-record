const admin = require('firebase-admin');

const serviceAccount = require('./service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('cities').doc('Sydney').set({
  name: 'Sydney'
}).then(resp => console.log(resp))
