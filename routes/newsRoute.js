const express = require("express")
const { getHeadlines, getEntertainment, getHealth, getBusiness, getScience, getSports, getTechnology } = require("../controllers/newsController")
const router = express.Router()

router.get("/home", getHeadlines)
router.get("/entertainment", getEntertainment)
router.get("/health", getHealth)
router.get("/business", getBusiness)
router.get("/science", getScience)
router.get("/sports", getSports)
router.get("/technology", getTechnology)

module.exports = router