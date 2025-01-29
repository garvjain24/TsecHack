import admin from "firebase-admin";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccount = JSON.parse(readFileSync(join(__dirname, "./sdk.json"), "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reunite-ec253.firebaseio.com",
});

const db = admin.firestore();
const storage = admin.storage();

export { db, storage };