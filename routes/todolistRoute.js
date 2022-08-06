const router = require('express').Router()
// import controller
const {getRoute,postRoute,putRoute, deleteRoute} = require('../controller/controller')

// todolistRoute route
router.get('/api/item', getRoute)
router.post('/api/item',postRoute)
router.put('/api/item/:id',putRoute)
router.delete('/api/item/:id',deleteRoute)

module.exports = router;