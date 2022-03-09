const express		= require("express")
const router		= express.Router()

const commentController	= require("./../controllers/commentController")

router.get("/", commentController.getComment)

router.post("/create", commentController.createComment)

module.exports = router

//