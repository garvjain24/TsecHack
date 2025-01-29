  import { addDocument, getDocuments, updateDocument, deleteDocument } from "../firebase/firestoreUtils.js";
  
  export const addAadhaar = async (req, res) => {
    try {
      const id = await addDocument("aadhaar", req.body);
      res.status(201).json({ id, message: "Aadhaar record added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getAadhaarRecords = async (req, res) => {
    try {
      const records = await getDocuments("aadhaar");
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateAadhaar = async (req, res) => {
    try {
      const { id } = req.params;
      const message = await updateDocument("aadhaar", id, req.body);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteAadhaar = async (req, res) => {
    try {
      const { id } = req.params;
      const message = await deleteDocument("aadhaar", id);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };