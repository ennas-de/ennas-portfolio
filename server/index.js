const express = require("express");
const app = express();
const cors = require("cors");
const educationRoutes = require("./routes/EducationRoutes");
const experienceRoutes = require("./routes/ExperienceRoutes");
const languageRoutes = require("./routes/LanguageRoutes");
const projetRoutes = require("./routes/ProjetRoutes");
const skillRoutes = require("./routes/SkillRoutes");
const userRoutes = require("./routes/UserRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
// const seedDB = require("./seed");

app.use(cors());
app.use(bodyParser.json());
// seedDB();

app.get("/", (req, res) => {
  res.send("Hello Ennas.");
});
app.use("/educations", educationRoutes);
app.use("/experiences", experienceRoutes);
app.use("/languages", languageRoutes);
app.use("/projects", projetRoutes);
app.use("/skills", skillRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.DATA_BASE_CONNECTION)
  .then(app.listen(process.env.PORT || 3001, process.env.IP), () =>
    console.log("connected to db", process.env.DATA_BASE_CONNECTION)
  )
  .catch((err) => console.error(err));
