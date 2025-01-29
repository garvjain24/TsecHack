import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";

import userRoutes from "./src/routes/userRoutes.js";
import aadhaarRoutes from "./src/routes/aadhaarRoutes.js";
import complaintRoutes from "./src/routes/complaintRoutes.js";
import ngoRoutes from "./src/routes/ngoRoutes.js";
import sightingsRoutes from "./src/routes/sightingsRoutes.js";

const app = express();

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/aadhaar", aadhaarRoutes);
app.use("/complaints", complaintRoutes);
app.use("/ngos", ngoRoutes);
app.use("/sightings", sightingsRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("Missing Persons API is running...");
});

// Start the Server
const PORT = process.env.PORT || 5020;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});