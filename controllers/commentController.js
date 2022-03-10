const Comentarios = require ("../models/Comentarios.model")


exports.getComment = async (req, res) => {

    const allComments = await Comentarios.find({})

	res.json({
		msg: "Se ha obtenido con exito el listado de comentarios",
        data: allComments 
	})

}

exports.createComment = async (req, res) => {
	
	// FORMULARIO
	const { name,  description } = req.body

	//console.log(name, description)

	const newComment = await Comentarios.create({name, description})

    res.json({
        msg: "Se ha creado un comentario correctamente",
        data: newComment
    })

}

exports.getSingleComment      = async (req,res) =>{

    const { id } = req.params

    

    const singleComment = await Comentarios.findById(id)

    res.json({
        msg:"Se ha obtenido el comment unico",
        data: singleComment
    })
}

exports.editComment     = async (req,res) => {

    const { name, description} = req.body

    
    const { id } = req.params
    console.log(id)
    await Comentarios.findByIdAndUpdate(
        id,
        {name, description},
        
        )

		res.json({
            msg:"Se ha hecho el edit"
           
        })

		

}


exports.deleteComment = async (req,res) => {

    const { id } = req.params

    try{

        const deletedComment = await Comentarios.findByIdAndRemove(id)

        res.json({
            msg:"Se ha eliminado este comentario",
            data: deletedComment
        })

    } catch (error) {

        console.log(error)

        
    }
}
