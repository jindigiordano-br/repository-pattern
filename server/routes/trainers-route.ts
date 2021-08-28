export {}
// Import express
const express = require('express')

// Import trainers-controller
const trainersRoutes = require('../controllers/trainers-controller.ts')

// Create router
const router = express.Router()

router.get('', trainersRoutes.trainersAll)

router.post('', trainersRoutes.trainersCreate)

router.delete('/:id', trainersRoutes.trainersDelete)

router.put('/reset', trainersRoutes.trainersReset)

router.get('/:id', trainersRoutes.trainersRead)

// Export router
module.exports = router