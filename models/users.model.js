import { Sequelize } from "sequelize"
import db from "../config/database.js"

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Users = db.define('users', {
		// Define attributes
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		freezeTableName: true
	});

// create table if not exists
await Users.sync()

// Export model
export default Users;