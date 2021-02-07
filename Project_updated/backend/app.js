// const path = require("path");
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

app.use((req,res,next)=>{

  //significa che non importa da quale dominio l'app che sta inviando la richiesta è in esecuzione, gli è consentito accedere alle nostre risorse
  res.setHeader("Access-Control-Allow-Origin","*");

  //ora possiamo anche limitarla ai domini che inviano richieste con un certo insieme di intestazioni predefinite
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );

  //quali verbi http concediamo
  //option è una richiesta implicita che fa il nostro browser, ad esempio prima di una post per verificare se la richiesta di post è valida
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


//filtra per path e decide a che routes indirizzare
app.use("/api/stories", storiesRoutes);
app.use("/api/user", userRoutes);
app.use("/api/games", gamesRoutes);


module.exports = app;
