import { addDocument, getDocuments, updateDocument, deleteDocument } from "../firebase/firestoreUtils.js";

export const addSighting = async (req, res) => {
  try {
    const id = await addDocument("sightings", req.body);
    res.status(201).json({ id, message: "Sighting reported successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSightings = async (req, res) => {
  try {
    const sightings = await getDocuments("sightings");
    res.status(200).json(sightings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSighting = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await updateDocument("sightings", id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSighting = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deleteDocument("sightings", id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


