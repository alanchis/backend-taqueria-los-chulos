

// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const indexController 	= require("./../controllers/indexController")


// 2. ROUTER
// A. HOME
router.get("/", indexController.getHome)


// 3. EXPORTACIÓN
module.exports = router