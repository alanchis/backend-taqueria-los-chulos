const bcryptjs = require("bcryptjs")
const jwt	= require("jsonwebtoken")

const User = require("./../models/Users.model")




exports.create = async (req, res) => {


	const { 
		name, 
		lastname, 
		email, 
		password } = req.body


		try {
			// 1. VERIFICACIÓN DEL PASSWORD Y ENCRIPTARLO
			const salt = await bcryptjs.genSalt(10)
			const hashedPassword = await bcryptjs.hash(password, salt)

			console.log(hashedPassword)

			// 2. CREACIÓN DEL USUARIO
			const newUser = await User.create({
				name,
				lastname,
				email,
				password: hashedPassword
			})

			console.log(newUser)

			// - GESTIÓN DE JWT - AUTENTICACIÓN
			// CUANDO EL USUARIO SE REGISTRA, YA NO ES NECESARIO QUE INICIE SESIÓN EN ESE MOMENTO.

			// A. CREACIÓN DEL PAYLOAD (DATOS)
			const payload = {
				user: {
					id: newUser._id
				}
			}

			// B. CREACIÓN DE JSON WEB TOKEN
			jwt.sign(
				payload, // DATOS QUE ACOMPAÑAN
				process.env.SECRET,
				{
					expiresIn: 3600000
				},
				(error, token) => {
					if (error) throw error

					res.json({
						msg: "User created succesfully",
						data: token
					})

				}
			)



		} catch (error) {
			console.log(error)
            

			res.json({
				msg: `There was an error creating a new user. try a different email `
			})

		}


}


exports.login = async (req, res) => {

	const { email, password } = req.body

	try {
		
		const foundUser = await User.findOne({ email })

		if(!foundUser) {
			return res.json({
				msg: "User was not found."
			})
		}

		const verifiedPass = await bcryptjs.compare(password, foundUser.password)


		if(!verifiedPass){
			return await res.json({
				msg: "Username and password do not match or you do not have an account yet"
			})
		}

		// GESTIÓN DE JSONWEBTOKEN

		// A. PAYLOAD

		const payload = {
			user: {
				id: foundUser._id
			}
		}

		jwt.sign(
			payload,
			process.env.SECRET,
			{
				expiresIn: 36000000
			},
			(error, token) => {
				if(error) throw error


				res.json({
					msg: "Login was successfully.",
					data: token
				})

			}
		)

		return

	} catch (error) {

		console.log(error)

		res.json({
			msg: "There was a problem with the authentication."
		})
		
	}


}


exports.verifyToken = async (req, res) => {

	console.log(req.user)

	try {
		
		const foundUser = await User.findById(req.user.id).select("-password")


		return res.json({
			msg: "User data found.",
			data: foundUser
		})

	} catch (error) {
		console.log(error)

		res.json({
			msg: "There was an error updating the user data."
		})

	}

 
}