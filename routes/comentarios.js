const express		= require("express")
const router		= express.Router()

const commentController	= require("./../controllers/commentController")

router.get("/", commentController.getComment)
router.post("/create", commentController.createComment)



router.get("/comment/:id", commentController.getSingleComment)
router.post("/delete/:id", commentController.deleteComment)
router.post("/comment/edit/:id", commentController.editComment)


module.exports = router

