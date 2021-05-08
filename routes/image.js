const { Photos } = require("../models/Photos")
const router = require("./cloudinary")
router.post("/api/uploads", async (req, res) => {
    const { caption, imageUrl } = req.body
    let upload = await Photos.create({
        caption: caption,
        imageUrl: imageUrl
    })
    res.json(upload)
})

module.exports = router