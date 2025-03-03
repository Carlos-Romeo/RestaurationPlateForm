require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const userRoutes = require("./Routes/userRoutes");
const reservRoutes = require("./Routes/reservRoutes");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const tableRoutes = require("./Routes/tableRoutes");

const port = 5000;
app.use(cors());
app.use(express.json());

// Servir le dossier upload statiquement
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Autres configurations du serveur...
app.use("/api", userRoutes);
app.use("/api", reservRoutes);
app.use("/api", restaurantRoutes);
app.use("/api", tableRoutes);

app.listen(port, () => console.log(`je suis connecté sur le port ${port}`));