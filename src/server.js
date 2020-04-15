const express = require('express');
const bodyParser = require('body-parser')

const app = express()



// middlewear
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// Routes

const accountsRoutes = require('../src/routes/accounts');
app.use('/accounts',accountsRoutes)

const port = 3000;



app.listen(port, () => {
    console.log('Listening on Port : ', port)

    // //check DB Connections
    // conn.connect((err) => {
    //     if(err){
    //         console.log(err)
    //     }else {
            
    //         conn.query(`select * from accounts`, (error,results) => {
    //             console.log(error);
    //             console.log(results);
    //         })
    //     }
    // })
})