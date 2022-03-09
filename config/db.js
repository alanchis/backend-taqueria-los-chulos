

// 1. IMPORTS
const mongoose = require("mongoose")

// 2. FUNCIÓN
const connectDB = async () => {

	try {
		
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		return console.log("Database connected.")

	} catch (error) {
		
		console.log(error)
		return process.exit(1)

	}

}

// 3. EXPORTACIÓN
module.exports = connectDB