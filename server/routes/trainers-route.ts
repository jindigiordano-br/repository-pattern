export {}
// Import express
const express = require('express')

// Import trainers-controller
const trainersRoutes = require('../controllers/trainers-controller.ts')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all trainer
// In server.ts, trainers route is specified as '/trainers'
// this means that '/all' translates to '/trainers/all'
router.get('/all', trainersRoutes.trainersAll)

// Add route for POST request to create new trainer
// In server.ts, trainers route is specified as '/trainers'
// this means that '/create' translates to '/trainers/create'
router.post('/create', trainersRoutes.trainersCreate)

// Add route for PUT request to delete specific trainer
// In server.ts, trainers route is specified as '/trainers'
// this means that '/delete' translates to '/trainers/delete'
router.put('/delete', trainersRoutes.trainersDelete)

// Add route for PUT request to reset trainershelf list
// In server.ts, trainers route is specified as '/trainers'
// this means that '/reset' translates to '/trainers/reset'
router.put('/reset', trainersRoutes.trainersReset)

// Export router
module.exports = router