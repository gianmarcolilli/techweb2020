const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const storiesRoutes = require('./routes/stories');
const userRoutes = require('./routes/user');
const gamesRoutes = require('./routes/games');

const app = express();

mongoose
  .connect(
    "mongodb+srv://dbUser:techweb2020@cluster0.hpmp1.gcp.mongodb.net/dbtech?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(()=> {
    console.log("Connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/", express.static(path.join(__dirname, "dist")));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/stories", storiesRoutes);
app.use("/api/user", userRoutes);
app.use("/api/games", gamesRoutes);
app.use((req, res, next)=> {
  res.sendFile(path.join(__dirname, "dist","index.html"));
});


module.exports = app;
