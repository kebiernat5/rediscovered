const Photos = require("../models/Photos");
const router = require("express").Router();

router.post("/api/uploads", async (req, res) => {
<<<<<<< HEAD
    const { caption, imageUrl } = req.body
    let upload = await Photos.create({
        caption: caption,
        photoUrl: imageUrl
    })
    res.json(upload)
})


router.get("/api/images", async (req, res) => {
    let images = await Photos.find()
    res.json(images) 
})

module.exports = router
=======
  console.log("req.body", req.body);
  const { caption, imageUrl } = req.body;
  let upload = await Photos.create({
    caption: caption,
    photoUrl: imageUrl,
  });
  res.json(upload);
});


router.get("/api/images/", async (req, res) => {
  let images = await Photos.find()
  res.json(images)
})

module.exports = router;
>>>>>>> c2097ddd42dd870b2de88e46468d0af43b70ed00
