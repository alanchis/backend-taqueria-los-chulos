const mongoose = require ("mongoose")

const bebidasSchema = mongoose.Schema (
    {

        name:{
            type: String,
            required: true
        },

        cost:{
            type: Number,
            required: true,
            
        },
        description:{
            type: String,
            required: false
        }
    },
    {   timestamps: true
    }
)


const Bebidas = mongoose.model ("Bebidas", bebidasSchema)

module.exports = Bebidas

