const mongoose = require ("mongoose")

const tacosSchema = mongoose.Schema (
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


const Tacos = mongoose.model ("Tacos", tacosSchema)

module.exports = Tacos