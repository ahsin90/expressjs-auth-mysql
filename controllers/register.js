import jwt from "jsonwebtoken"
import Users from "../models/users.model.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
	try {
		// generate password's salt
		const salt = await bcrypt.genSalt(10);

		// hash the password before store into database
		req.body.password = await bcrypt.hash(req.body.password, salt);

		// create user
		let user = await Users.create(req.body)

		// create token
		let token = await jwt.sign({user_id: user.id, email: user.email}, "secretkeyappearshere", { expiresIn: "1h" });

		// update token to created user
		let update = await Users.update({ token: token }, {
		  where: {
		    id: user.id
		  }
		});

		// write http response
		res.status(200).json({status:true, message: "user created"})

	} catch(err){
		console.log(err.errors)
		res.status(200).json({status: false, message: "Error! Failed to created user"});
	}
}