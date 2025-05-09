const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mysql = require('mysql2');
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.send('This is sql express server');
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
