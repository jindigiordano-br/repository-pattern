// Import database
const knex = require('../db')

// Retrieve all trainers
exports.trainersAll = async (req: any, res: { json: (arg0: { message: string }) => void }) => {
  // Get all trainers from database
  knex
    .select('*') // select all records
    .from('trainers') // from 'trainers' table
    .then((userData: any) => {
      // Send trainers extracted from database in response
      res.json(userData)
    })
    .catch((err: any) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving trainers: ${err}` })
    })
}

// Create new trainer
exports.trainersCreate = async (req: { body: { name: any; element: any; city: any; favorite: any } }, res: { json: (arg0: { message: string }) => void }) => {
  // Add new trainer to database
  knex('trainers')
    .insert({ // insert new record, a trainer
      'name': req.body.name,
      'element': req.body.element,
      'city': req.body.city,
      'favorite': req.body.favorite
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `trainer \'${req.body.name}\' created.` })
    })
    .catch((err: any) => {
      // Send a error message in response
      res.json({ message: `There was an error creating trainer ${req.body.name}: ${err}` })
    })
}

// Remove specific trainer
exports.trainersDelete = async (req: { params: { id: any } }, res: { json: (arg0: { message: string }) => void }) => {
  // Find specific trainer in the database and remove it
  knex('trainers')
    .where('id', req.params.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `trainer ${req.params.id} deleted.` })
    })
    .catch((err: any) => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.params.id} trainer: ${err}` })
    })
}

// Remove all trainers on the list
exports.trainersReset = async (req: any, res: { json: (arg0: { message: string }) => void }) => {
  // Remove all trainers from database
  knex
    .select('*') // select all records
    .from('trainers') // from 'trainers' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'trainer list cleared.' })
    })
    .catch((err: any) => {
      // Send a error message in response
      res.json({ message: `There was an error resetting trainer list: ${err}.` })
    })
}

// Retrieve single trainer
exports.trainersRead = async (req: any, res: { json: (arg0: { message: string }) => void }) => {
  knex
    .select('*') // select all records
    .from('trainers')
    .where('id', req.params.id)
    .then((userData: any) => {
      res.json(userData)
    })
    .catch((err: any) => {
      res.json({ message: `There was an error retrieving trainer ${req.params.id}: ${err}` })
    })
}