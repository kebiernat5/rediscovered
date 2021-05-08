const Photos = require("../models/Photos");
const router = require("express").Router();

router.post("/api/uploads", async (req, res) => {
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