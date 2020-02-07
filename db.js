const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'ec2-34-192-30-15.compute-1.amazonaws.com',
    port: '5432',
    user: 'pkcebsydrfznvn',
    password: 'aa50a9bae407206f3d2e323ec1492fea282faeb7f1f5457ad7d533d4186f4b5f',
    database: 'd2kq04nb5gp4c0'
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
