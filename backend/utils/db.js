const { getFirestore } = require("firebase-admin/firestore");
const admin = require("firebase-admin");

const SERVICE_ACCOUNT_PATH = process.env["SERVICE_ACCOUNT_PATH"];
const FIRESTORE_DB = process.env["FIRESTORE_DB"];
const serviceAccount = require("../" + SERVICE_ACCOUNT_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIRESTORE_DB,
});

const db = getFirestore();

exports.default = db;
