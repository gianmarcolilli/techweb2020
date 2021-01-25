const express = require("express");

const router = express.Router();
const Story = require("../models/story");

const checkAuth = require("../middleware/check-auth");

// //Route definita per il metodo POST.
router.post(
  "",
  checkAuth,
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
  let findQry = Story.find();

  findQry
    .then(() => {
      const story = new Story({
        title: req.body.title,
        didascalia: req.body.didascalia,
        fasciaEta: req.body.fasciaEta,
        id: req.body.id,
        image: req.body.image,
        attivita: req.body.attivita,
      });

      story
      .save()
      .then((createdStory) => {
        res.status(201).json({
          message: "Story added successfully",
          story: {
            ...createdStory,
            id: req.body.id,
          },
        });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({
          message: "Error!",
        });
      });
  });
});

//Route definita per il metodo PUT.
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

// //Route definita per il metodo GET.
// router.get("", (req, res, next) => {
//   const postQuery = Story.find();
//   let fetchedStories;
//   postQuery
//     .then((documents) => {
//       fetchedStories = documents;
//       return Story.count();
//     })
//     .then((count) => {
//       res.status(200).json({
//         message: "Posts fetched successfully!",
//         posts: fetchedStories,
//         maxPosts: count,
//       });
//       for (let i = 0; i <= count; i++) {
//         if (i < count) {
//           listaId[fetchedStories[i].id] = true;
//         } else {
//           listaId[i] = false;
//         }
//       }
//     });
// });

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
        message: "Stories fetched successfully!",
        posts: fetchedStories,
        maxPosts: count,
      });
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

//Route definita per il metodo DELETE.
router.delete("/:id",checkAuth, (req, res, next) => {
  Story.deleteOne({ id: req.params.id }).then((result) => {
    if (result.n > 0) {
      res.status(200).json({ message: "Deletion successful!" });
    } else {
      res.status(404).json({ message: "Not found!" });
    }
  });
});

module.exports = router;
