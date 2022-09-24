# Expressjs authentication using Json Web Token (JWT) and MySQL

Simple authentication in NodeJS and ExpressJS framework using Json Web Token (JWT) and MySql database.

## How to use it?
* Please download or clone the project first.
* Make sure mysql and nodejs have been installed on your computer.
* Create a database on your computer. For example, I had named it with "auth".
* Create .env file and fill it with configuration (see .env configuration).
* Open the project using a console and run ```npm install ``` in your root project.
* Then run project ```npm run dev ```
* Use API tools such as Postman, cURL, etc.

## .env configuration
The .env file configuration can be modified as needed.
```
NODE_ENV="development"
PORT=3000
SECRET_KEY=eyJ1c2VyX2lkIjoyLCJlbWFpbCI6ImFoc2luLmFuZEBnbWFpbC5jb20iLCJpYXQiOjE2NjM5MTcwNjEsImV4c
DB_HOST="127.0.0.1"
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=auth
```

## Routes

1. Register a new user with POST method (input attributes: email, password, name): http://localhost:3000/register 
2. log in as a registered user with POST method (input attributes: email and password): http://localhost:3000/login. If it succeeds will be got the result:
```json
{
    "status": true,
    "data": {
        "user_id": 1,
        "email": "email@mail.com",
        "name": "Muhammad Ahsin",
        "created_at": "2022-09-24T06:15:45.000Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFoc2luLmFuZEBnbWFpbC5jb20iLCJpYXQiOjE2NjQwMDA4NjksImV4cCI6MTY2NDA4NzI2OX0.herPUpd2LynXuSZewZUYOjVXgX-qcVautv3Z3Whydr4"
    }
}
```

3. The token will be used when you make a request to protected routes. Put the token in your header of the request as Authorization. There are examples of protected routes:

    * http://localhost:3000/admin/dashboard
    * http://localhost:3000/admin/users


## Run with Docker?
Docker is a simple way to run the project, follow the instruction below:
1. Build a Docker image that runs ```docker build -t expressjwt .``` on your console and in the project root.
2. Run ```docker compose up```


## License

  [MIT](LICENSE)