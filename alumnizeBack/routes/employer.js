const express = require('express')
const router = express.Router()
var knex = require('../db/knex')

function Employer(){
    return knex('employer')
}

function createEmployer(newEmployer){
    return knex('employer').insert(newEmployer).returning('*'); 
}

function updateEmployer(id, newEmpObj){
    return knex('employer').where('id', id).update(newEmpObj, '*')
}
// CREATE
router.post('/', (req, res) => {
    console.log(req.body);
  createEmployer(req.body).then(newEmployer => {
    res.json(newEmployer)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})
// READ
    router.get('/', function (req, res){
       Employer().select().then(function (result){
           res.send(result)
       })
    })

    router.get('/:id', function (req, res){
        Employer().where('id',
        req.params.id).first().then(function
        (result){
            res.send(result)
        })
    })
// UPDATE 
// make route look like post 
router.put('/:id', function (req, res){
   const id = Number(req.params.id)
   console.log(req.body)
  updateEmployer(id, req.body).then(updatedEmployer => {
    res.json(updatedEmployer)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

// DELETE 
router.delete('/:id', function (req, res){
    Employer().where('id', req.params.id).del()
    .then(function (result){
        res.send(201);
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router