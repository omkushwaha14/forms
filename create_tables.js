const mysql = require('mysql2')
 const connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bf1e21f64c9bfb',
    password: '6abaef19',
    database: 'heroku_4964469205ceb69'
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

