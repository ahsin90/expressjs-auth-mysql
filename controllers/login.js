import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import * as dotenv from 'dotenv'
dotenv.config()
import { body, validationResult } from 'express-validator';
import Users from "../models/users.model.js"

export const login =  async (req, res) => {
	const errors = validationResult(req);

	let { email, password } = req.body;
	
	// find user in the database
	let user = await Users.findOne({
	    where: {email: email}
	})

    if(user === null){
    	return res.status(401).json({status: false, message: "email was not found"});
    }

	// password validation
	const validPassword = await bcrypt.compare(password, user.password);

	if( !validPassword ){
		return res.status(401).json({status: false, message: "Password was not match!"});
	}

  	//create a token
  	let token = await jwt.sign({user_id: user.id, email: user.email}, process.env.SECRET_KEY, { expiresIn: "24h" });

	if( !token ){
		return res.status(401).json({status: false, message: "Error! Something went wrong."});
	}else{
		// create successfull response
	  	res.status(200).json({status: true,
	      data: {
	        user_id: user.id,
	        email: user.email,
	        name: user.name,
	        created_at: user.createdAt,
	        token: token,
	      },
	    });
	}
}

