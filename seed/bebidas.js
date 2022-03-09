const mongoose          = require("mongoose")
const Bebidas           = require("../models/Bebidas.model")

// ℹ️ Connects to the database
const connectDB	    	= require("../config/db")
require("dotenv").config()
connectDB()


// Items
const bebidasArray = [
    {
        "name": "agua de horchata ",
        "cost": 20,
        "description": "355 ml de agua de horchata",
    },
    {
        "name": "agua de jamaica ",
        "cost": 20,
        "description": "355 ml de agua de jamaica",
    },
    {
        "name": "refresco ",
        "cost": 25,
        "description": "355 ml. Coca-Cola, Sprite, Sidral",
    },
    {
        "name": "cerveza ",
        "cost": 42,
        "description": "355 ml. Heineken, Ultra, Modelo, Pacifico",
    }

]




const createBebidas = async(data) => {

    try {
        
        const createBebidas = await Bebidas.create(data)
        return mongoose.connection.close()

    } catch (error) {

        console.log(error)
        process.exit(1)

    }
}

createBebidas(bebidasArray)