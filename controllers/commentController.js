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