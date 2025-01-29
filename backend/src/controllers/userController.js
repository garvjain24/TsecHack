import { addDocument, getDocuments, updateDocument, deleteDocument } from "../firebase/firestoreUtils.js";

export const addUser = async (req, res) => {
  try {
    const id = await addDocument("users", req.body);
    res.status(201).json({ id, message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getDocuments("users");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await updateDocument("users", id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deleteDocument("users", id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};