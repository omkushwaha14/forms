const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'ec2-52-55-59-250.compute-1.amazonaws.com',
    user: 'uvebghuonldiva',
    password: '9ac4cce36407f9bd1400086275b3fcbf8e43dc75f9defab3eb843a100f1d5839',
    database: 'd9t1qpdpe8dmp8'
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
