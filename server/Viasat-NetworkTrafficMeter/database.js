const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./key.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const updateUserData = async (id, data) => {
    const dataRef = db.collection('users').doc(id);

    const res = await dataRef.update({ data: data });
    return res;
}

module.exports = { updateUserData };