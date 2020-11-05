const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const storiesRoutes = require('./routes/stories');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

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
app.use("/images", express.static(path.join("backend/images")));

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
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);


module.exports = app;
