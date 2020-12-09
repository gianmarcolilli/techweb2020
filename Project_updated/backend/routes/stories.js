const { ViewEncapsulation } = require("@angular/core");
const express = require("express");
const multer = require("multer");
const { create, db } = require("../models/story");

const Story = require("../models/story");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

let listaId = [Boolean];

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error("Invalid mime type");
//     if (isValid) {
//       error = null;
//     }
//     cb(error, "backend/images");
//   },
//   filename: (req, file, cb) => {
//     const name = file.originalname
//       .toLowerCase()
//       .split(" ")
//       .join("-");
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, name + "-" + Date.now() + "." + ext);
//   }
// });

router.post(
  "",
  // checkAuth,
  // multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    let findQry = Story.find();
    // let lunghezza =  Story.count();

    findQry
      .then((documents) => {
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
          for (let i = 0; i <= lunghezza; i++) {
            if (listaId[i] == false) {
              //pushamo la storia con id=i
              listaId[i] = true;
              if (listaId[i+1] != false && listaId[i+1] != true) {
                listaId[i+1]=false;
              }
              const story = new Story({
                title: req.body.title,
                didascalia: req.body.didascalia,
                fasciaEta: req.body.fasciaEta,
                id: i,
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
                      id: i,
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

    // findQry
    //   .then((documents) => {
    //     return Story.count();
    //   })
    //   .then((conteggio) => {
    //     const story = new Story({
    //       title: req.body.title,
    //       didascalia: req.body.didascalia,
    //       fasciaEta: req.body.fasciaEta,
    //       id: conteggio,
    //       image: req.body.image,
    //       attivita: req.body.attivita,
    //     });
    //     story
    //       .save()
    //       .then((createdStory) => {
    //         res.status(201).json({
    //           message: "Storia added successfully",
    //           story: {
    //             ...createdStory,
    //             id: conteggio,
    //           },
    //         });
    //       })
    //       .catch((e) => {
    //         console.log(e.message);
    //         res.status(500).json({
    //           message: "Error!",
    //         });
    //       });
    //   });
  }
);

router.put("/:id", (req, res, next) => {
  Story.updateOne(
    { id: req.params.id },
    {
      id: req.body.id,
      title: req.body.nome,
      fasciaEta: req.body.fasciaEta,
      urlBackground: req.body.urlBackground,
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

// router.put(
//   "/:id",
//   checkAuth,
//   multer({ storage: storage }).single("image"),
//   (req, res, next) => {
//     let imagePath = req.body.imagePath;
//     if (req.file) {
//       const url = req.protocol + "://" + req.get("host");
//       imagePath = url + "/images/" + req.file.filename;
//     }
//     const post = new Post({
//       _id: req.body.id,
//       title: req.body.title,
//       content: req.body.content,
//       imagePath: imagePath,
//       creator:req.userData.userId
//     });
//     Post.updateOne({ _id: req.params.id, creator:req.userData.userId }, post).then(result => {
//        if (result.nModified > 0) {
//         res.status(200).json({ message: "Update successful!" });
//        } else {
//         res.status(401).json({ message: "Not Authorized!" });
//        }
//     });
//   }
// );
router.get("", (req, res, next) => {
  // const pageSize = +req.query.pagesize;
  // const currentPage = +req.query.page;
  const postQuery = Story.find();
  let fetchedStories;
  // if (pageSize && currentPage) {
  //   postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  // }
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

router.get("/t/:title", (req, res, next) => {
  Story.findOne({
    title: req.params.title,
  }).then((story) => {
    if (story) {
      res.status(200).json(story);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
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
