import { addDocument, getDocuments, updateDocument, deleteDocument } from "../firebase/firestoreUtils.js";

export const addNGO = async (req, res) => {
  try {
    const id = await addDocument("ngos", req.body);
    res.status(201).json({ id, message: "NGO added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNGOs = async (req, res) => {
  try {
    const ngos = await getDocuments("ngos");
    res.status(200).json(ngos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNGO = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await updateDocument("ngos", id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNGO = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deleteDocument("ngos", id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


