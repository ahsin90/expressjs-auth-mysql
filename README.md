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

## .env Configuration
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

## License

  [MIT](LICENSE)