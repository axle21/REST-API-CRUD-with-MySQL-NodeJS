const mysql = require('mysql');

const dbconfig = {
    host : 'localhost',
    user: "root",
    password: "Password@123",
    port: 3306,
    database: 'nodejs-mysql'
}

const conn = mysql.createPool(dbconfig)

module.exports = (query) => {
    return new Promise((res , rej) => {
        conn.getConnection((err,sql) => {
        if(err){
            console.log(err);
            rej(err)
            
        }else {
            
            sql.query(query, (err,results) => {
                if(err){
                    console.log(err);
                    rej(err)
                } else {
                    res(results)
                }
                
                sql.release

            })
        }
        })
    })
};