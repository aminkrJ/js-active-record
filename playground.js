const admin = require('firebase-admin');

const serviceAccount = require('./service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('cities').doc('Sydney').set({
  name: 'Sydney',
  regions: {
    suburbs: 200
  }
})

db.collection('cities').doc('Melbourne').set({
  name: 'Melbourne',
  regions: {
    suburbs: 100
  }
})

async function findAll() {
  let query = db.collection('cities')
  query = query.where("regions.suburbs", "==", 100)
  const snap = await query.get()

  snap.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}

findAll()
