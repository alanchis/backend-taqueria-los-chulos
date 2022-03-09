const mongoose          = require("mongoose")
const Tacos             = require("../models/Tacos.model")

// ℹ️ Connects to the database
const connectDB	    	= require("../config/db")
require("dotenv").config()
connectDB()


// Items
const tacosArray = [
    {
        "name": "orden de bistec ",
        "cost": 45,
        "description": "orden de 3 tacos de bistec (100 gr)",
    },
    {
        "name": "orden de chorizo ",
        "cost": 45,
        "description": "orden de 3 tacos de chorizo (100 gr)",
    },
    {
        "name": "alambre de pastor ",
        "cost": 80,
        "description": "alambre de 120 gr de pastor con queso y tortilla de harina",
    },
    {
        "name": "alambre de arrachera ",
        "cost": 80,
        "description": "alambre de 120 gr de arrachera con queso y tortilla de harina",
    },
    {
        "name": "volcan de pastor ",
        "cost": 35,
        "description": "volcan de 50 gr de pastor ",
    }
]




const createTacos = async(data) => {

    try {
        
        const createTacos = await Tacos.create(data)
        return mongoose.connection.close()

    } catch (error) {

        console.log(error)
        process.exit(1)

    }
}

createTacos(tacosArray)