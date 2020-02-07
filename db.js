const mysql = require('mysql')

var connection = mysql.createPool({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bf1e21f64c9bfb',
    password: '6abaef19',
    database: 'heroku_4964469205ceb69'
})

function getAllPersons () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM akashs`,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}
function addNewPerson(name, emails, message) {

    return new Promise (function(resolve, reject) {
        connection.query(
            `INSERT INTO akashs (name, emails, message) VALUES (?, ?, ?)`,
            [name, emails, message],
            function(err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}
exports = module.exports = {
    getAllPersons,
    addNewPerson
}
