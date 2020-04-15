const conn = require('../database/conn.js')

module.exports = async (id , username, password) => {

    try {

        const query = `UPDATE  ` + 
        `accounts ` + 
        `SET ` +
        `username = '${username}', ` +
        `password = '${password}'` + 
        `WHERE ` + 
        `id = ${id}`

        await conn(query)

        return true

    } catch(error){

        return false
    }


}