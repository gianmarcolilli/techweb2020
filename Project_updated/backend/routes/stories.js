const { ViewEncapsulation } = require("@angular/core");
const express = require("express");
const { create, db } = require("../models/story");
const mongoose = require("mongoose");

const router = express.Router();
const Story = require("../models/story");

//Quando viene utilizzato id i-esimo listaId[i] viene settato a true
//Quando id i-esimo viene liberato listaId[i] viene settao a false
// let listaId = [];

// //Route definita per il metodo POST.
// router.post(
//   "",
//   // checkAuth,
//   // multer({ storage: storage }).single("image"),
//   (req, res, next) => {
//     const url = req.protocol + "://" + req.get("host");

//     let findQry = Story.find();
//     let fetchedStories;

//     findQry
//       .then((documents) => {
//         fetchedStories = documents;
//         return Story.count();
//       })
//       .then((lunghezza) => {

//         if (lunghezza == 0) {
//           listaId[0] = true;
//           listaId[1] = false;
//           const story = new Story({
//             title: req.body.title,
//             didascalia: req.body.didascalia,
//             fasciaEta: req.body.fasciaEta,
//             id: 0,
//             image: req.body.image,
//             attivita: req.body.attivita,
//           });
//           story
//             .save()
//             .then((createdStory) => {
//               res.status(201).json({
//                 message: "Storia added successfully",
//                 story: {
//                   ...createdStory,
//                   id: 0,
//                 },
//               });
//             })
//             .catch((e) => {
//               console.log(e.message);
//               res.status(500).json({
//                 message: "Error!",
//               });
//             });
//         } else {
//           for (let i = 0; i < listaId.length; i++) {
//             if (listaId[i] == false) {
//               listaId[i] = true;
//               if (listaId[i + 1] != true || listaId[i + 1] != "") {
//                 listaId[i + 1] = false;
//               }
//               const story = new Story({
//                 title: req.body.title,
//                 didascalia: req.body.didascalia,
//                 fasciaEta: req.body.fasciaEta,
//                 id: i,
//                 image: req.body.image,
//                 attivita: req.body.attivita,
//               });
//               let x = i;
//               i=listaId.length
//               story
//                 .save()
//                 .then((createdStory) => {
//                   res.status(201).json({
//                     message: "Storia added successfully",
//                     story: {
//                       ...createdStory,
//                       id: x,
//                     },
//                   });

//                 })
//                 .catch((e) => {
//                   console.log(e.message);
//                   res.status(500).json({
//                     message: "Error!",
//                   });
//                 });
//             } else if(listaId[i]=="") {
//               listaId[i]=false
//             }
//           }
//         }
//       });
//   }
// );


router.post("", (req, res, next) => {
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
router.put("/:id", (req, res, next) => {
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
router.delete("/:id", (req, res, next) => {
  Story.deleteOne({ id: req.params.id }).then((result) => {
    if (result.n > 0) {
      res.status(200).json({ message: "Deletion successful!" });
    } else {
      res.status(404).json({ message: "Not found!" });
    }
  });
});

module.exports = router;
