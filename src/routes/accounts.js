const express = require('express');
const router = express.Router();

const createService = require('../services/create');
const deleteService = require('../services/delete');
const readService = require('../services/read');
const updateService = require('../services/update')

router.post('/create', async (req,res)=> {
    const {username,password } = req.body;
    
    const result = await createService(username,password)
   
    
    if(result){
        res.status(200).send({status : result, message:"Sucessfully Created"})
    } else {
        res.status(500).send({status : "Error", message:"Not Created"})
    }
})

router.get('/get', async (req,res)=> {
    const {fields } = req.query;

 

    const result = await readService(fields)

    if(result){
        res.status(200).send({ result})
    } else {
        res.status(500).send({status : "Error", message:"Not Retrieve"})
    }
})


router.put('/update', async (req,res)=> {
    const {id,newUsername,newPassword } = req.body;

    const result = await updateService(id,newUsername,newPassword)

    if(result){
        res.status(200).send({status : result, message:"Sucessfully Updated"})
    } else {
        res.status(500).send({status : "Error", message:"Not Updated"})
    }
})

router.delete('/delete', async (req,res)=> {
    const {id} = req.query;

    const result = await deleteService(id)

    if(result){
        res.status(200).send({status : result, message:"Sucessfully deleted"})
    } else {
        res.status(500).send({status : "Error", message:"Not deleted"})
    }
})

module.exports = router