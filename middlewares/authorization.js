const jwt	= require("jsonwebtoken")

const authorization = async (req, res, next) => {

	const token = req.header("x-auth-token")

	if(!token){
		return res.json({
			msg: "There is no token, invalid permit."
		})
	}

	try {
		
		const openToken = await jwt.verify(token, process.env.SECRET)

		req.user = openToken.user

		next()


	} catch (error) {
		
		console.log(error)

		res.json(
			{
				msg: "There was an error with the token."
			}
		)

	}



}

module.exports = authorization