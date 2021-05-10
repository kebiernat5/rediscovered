const mongoose = require("mongoose");
const db = require("./models");
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/rediscovered";

const PhotoSeed = [
    {
        caption: "Painted Girl",
        photoUrl: "http://res.cloudinary.com/katebiernat/image/upload/v1620452356/e8h3zquvxikabvr2bhze.jpg"

    },
    {
        caption: "Rose wall",
        photoUrl: "http://res.cloudinary.com/katebiernat/image/upload/v1620599253/ykuexidf1g7po99njmek.jpg"

    },
    {
        caption: "Dancers waiting",
        photoUrl: "http://res.cloudinary.com/katebiernat/image/upload/v1620606614/edocm2a9nltav8evj17h.jpg"

    }
],