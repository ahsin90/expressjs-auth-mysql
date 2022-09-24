# Expressjs authentication using Json Web Token (JWT) and MySQL

Simple authentication in NodeJS and ExpressJS framework using Json Web Token (JWT) and MySql database.

## How to use?
* Please download or clone the project first.
* Make sure mysql and nodejs have installed in your computer.
* Create a database in your computer. For an example i had named it with "auth".
* Create .env file anf fill it with configuration (see .env configuration).
* Open project using console and run ```console npm install ``` in your root project.
* Than run project ```console npm run dev ```
* Use API tools such as Postman, cURL, etc.

## .env configuration
The .env file configuration, it can be modified as needed.
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
2. Login as registered user with POST method (input attributes: email and password): http://localhost:3000/login. If it succeed will be got result:
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

3. The token will be use when you make request to protected routes. Put the token in your header of request as Authorization. These is examples of protected routes:

    * http://localhost:3000/admin/dashboar
    * http://localhost:3000/admin/users


## License

  [MIT](LICENSE)