const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "crud"
})

connection.connect((error) =>{
    if(error) throw error;
})

module.exports = connection