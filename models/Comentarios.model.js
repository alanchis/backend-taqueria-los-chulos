const mongoose = require ("mongoose")

const comentariosSchema = mongoose.Schema (
    {

        name:{
            type: String,
            required: false
        },
       
        description:{
            type: String,
            required: false
        }
    },
    {   timestamps: true
    }
)


const Comentarios = mongoose.model ("Comentarios", comentariosSchema)

module.exports = Comentarios