import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1lXW8CkkhGXozPAj7wZO3YH1ZKc7E_ck",
    authDomain: "iac2023trafficmeter.firebaseapp.com",
    projectId: "iac2023trafficmeter",
    storageBucket: "iac2023trafficmeter.appspot.com",
    messagingSenderId: "616306803110",
    appId: "1:616306803110:web:a009f6b8413547fa914f67",
    measurementId: "G-1QM7YBQL0F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function createUser(user) {
    try {
        await setDoc(doc(db, "users", user.id), user);
        console.log("User created successfully!");
    } catch (error) {
        console.log(error);
    };
}

export async function readUser(id) {
    try {
        const docRef = doc(db, "users", id,);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(id, data) {
    const ref = doc(db, "users", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(ref, data);
}