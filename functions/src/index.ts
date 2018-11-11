import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {GeoFirestore} from "geofirestore";

// initialize app on cold start of functions:
admin.initializeApp();
const firestore = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
