const conn = require('../database/conn.js')

module.exports = async (fields) => {

    try {

        const query = `SELECT ` + 
        `${fields} ` + 
        `FROM ` +
        `accounts`

        const results = await conn(query)

        return results

    } catch(error){

        return []
    }


}