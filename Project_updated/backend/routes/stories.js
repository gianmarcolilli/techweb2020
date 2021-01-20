const express = require("express");

const router = express.Router();
const Story = require("../models/story");

const checkAuth = require("../middleware/check-auth");

//quando lo occupo lo metto a true, quando lo libero lo metto a false
let listaId = [];

router.post(
  "",
  checkAuth,
  // multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    let findQry = Story.find();
    let fetchedStories;

    findQry
      .then((documents) => {
        fetchedStories = documents;
        return Story.count();
      })
      .then((lunghezza) => {

        if (lunghezza == 0) {
          listaId[0] = true;
          listaId[1] = false;
          const story = new Story({
            title: req.body.title,
            didascalia: req.body.didascalia,
            fasciaEta: req.body.fasciaEta,
            id: 0,
            image: req.body.image,
            attivita: req.body.attivita,
          });
          story
            .save()
            .then((createdStory) => {
              res.status(201).json({
                message: "Storia added successfully",
                story: {
                  ...createdStory,
                  id: 0,
                },
              });
            })
            .catch((e) => {
              console.log(e.message);
              res.status(500).json({
                message: "Error!",
              });
            });
        } else {
          for (let i = 0; i < listaId.length; i++) {
            if (listaId[i] == false) {
              //pushamo la storia con id=i
              listaId[i] = true;
              if (listaId[i + 1] != false && listaId[i + 1] != true) {
                listaId[i + 1] = false;
              }
              const story = new Story({
                title: req.body.title,
                didascalia: req.body.didascalia,
                fasciaEta: req.body.fasciaEta,
                id: i,
                image: req.body.image,
                attivita: req.body.attivita,
              });
              let x = i;
              i=listaId.length
              story
                .save()
                .then((createdStory) => {
                  res.status(201).json({
                    message: "Storia added successfully",
                    story: {
                      ...createdStory,
                      id: x,
                    },
                  });

                })
                .catch((e) => {
                  console.log(e.message);
                  res.status(500).json({
                    message: "Error!",
                  });
                });
            }
          }
        }
      });
  }
);

router.put("/:id",checkAuth, (req, res, next) => {
  Story.updateOne(
    { id: req.params.id },
    {
      id: req.body.id,
      title: req.body.nome,
      fasciaEta: req.body.fasciaEta,
      image: req.body.urlBackground,
      attivita: req.body.steps,
      didascalia: req.body.didascalia,
    }
  )
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Cannot find story" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't update story" + "ERRORE: " + error,
      });
    });
});


router.get("", (req, res, next) => {
  const postQuery = Story.find();
  let fetchedStories;
  postQuery
    .then((documents) => {
      fetchedStories = documents;
      return Story.count();
    })
    .then((count) => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedStories,
        maxPosts: count,
      });
      for (let i = 0; i <= count; i++) {
        if (i < count) {
          listaId[fetchedStories[i].id] = true;
        } else {
          listaId[i] = false;
        }
      }
    });
});

router.get("/:id", (req, res, next) => {
  Story.findOne({
    id: req.params.id,
  }).then((story) => {
    if (story) {
      res.status(200).json(story);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});


router.delete("/:id",checkAuth, (req, res, next) => {
  listaId[req.params.id] = false;
  Story.deleteOne({ id: req.params.id }).then((result) => {
    if (result.n > 0) {
      res.status(200).json({ message: "Deletion successful!" });
    } else {
      res.status(404).json({ message: "Not found!" });
    }
  });
});

module.exports = router;
