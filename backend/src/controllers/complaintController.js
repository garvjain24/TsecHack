import { addDocument, getDocuments, updateDocument, deleteDocument } from "../firebase/firestoreUtils.js";

export const addComplaint = async (req, res) => {
  try {
    const id = await addDocument("complaints", req.body);
    res.status(201).json({ id, message: "Complaint added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const complaints = await getDocuments("complaints");
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateComplaint = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await updateDocument("complaints", id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteComplaint = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deleteDocument("complaints", id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

