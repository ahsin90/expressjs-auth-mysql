import * as dotenv from 'dotenv'
import db from "./config/database.js"
import router from "./routes/routes.js"

import express from 'express'
import bodyParser from 'body-parser'

// load environtment variables
dotenv.config()

const app   = express()
const port  = process.env.PORT || 3000

// check the database connection
db.authenticate().then(() => {
   console.log(`Database connection has been established successfully.`);
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// use app routers
app.use(router)


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`)
})