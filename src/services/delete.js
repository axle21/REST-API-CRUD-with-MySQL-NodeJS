const conn = require('../database/conn.js')

module.exports = async (id) => {

    try {

        const query = `DELETE FROM ` + 
        `accounts ` + 
        `WHERE ` +
        `id = ${id}`

        await conn(query)

        return true

    } catch(error){

        return false
    }


}