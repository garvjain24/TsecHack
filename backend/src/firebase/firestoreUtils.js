import { db } from "./firebaseConfig.js";

// Generic Firestore CRUD Operations
export const addDocument = async (collection, data) => {
  const docRef = await db.collection(collection).add(data);
  return docRef.id;
};

export const getDocuments = async (collection) => {
  const snapshot = await db.collection(collection).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateDocument = async (collection, id, data) => {
  await db.collection(collection).doc(id).update(data);
  return "Document updated successfully";
};

export const deleteDocument = async (collection, id) => {
  await db.collection(collection).doc(id).delete();
  return "Document deleted successfully";
};