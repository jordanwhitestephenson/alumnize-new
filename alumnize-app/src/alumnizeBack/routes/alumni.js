const express = require('express')
const router = express.Router()
var knex = require('../db/knex')

function Alumnize(){
    return knex('alumni')
}

function createAlumni(newAlumni){
    return knex('alumni').insert(newAlumni).returning('*'); 
}

function updateAlumni(id, newAlumObj){
    return knex('alumni').where('id', id).update(newAlumObj, '*')
}
// CREATE
router.post('/', (req, res) => {
    console.log(req.body);
  createAlumni(req.body).then(newAlumni => {
    res.json(newAlumni)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})
// READ
    router.get('/', function (req, res){
       Alumnize().select().then(function (result){
           res.send(result)
       })
    })

    router.get('/:id', function (req, res){
        Alumnize().where('id',
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
  updateAlumni(id, req.body).then(updatedAlumni => {
    res.json(updatedAlumni)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

// DELETE 
router.delete('/:id', function (req, res){
    Alumnize().where('id', req.params.id).del()
    .then(function (result){
        res.send(201);
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router