const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myusers',
    password:'mypasss'
})
connection.query(`CREATE TABLE IF NOT EXISTS akashs(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL, 
emails VARCHAR(100) NOT NULL, 
message TEXT)`,
    function(err,results){
        if(err){console.error(err)}
        else{ console.log("table created succfully")
        }
    }

)

