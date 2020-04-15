const conn = require('../database/conn')

module.exports = async (username,password) => {

    try {

        const query = `INSERT INTO ` + 
        `accounts ` + 
        `VALUES ` +
        `(null,'${username}','${password}')`;

        await conn(query)

        return true

    } catch(error){

        return false
    }


}