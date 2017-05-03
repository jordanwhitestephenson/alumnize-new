const express = require('express')
const router = express.Router()
var knex = require('../db/knex')

function Mock(){
    return knex('mock')
}


    router.get('/', function (req, res){
       Mock().select().then(function (result){
           res.send(result)
       })
    })


module.exports = router
