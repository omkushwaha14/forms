const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myusers',
    password: 'mypasss',
    database: 'mytestdb'
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