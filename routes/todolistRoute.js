const router = require('express').Router()
// import controller
const {getRoute,postRoute,putRoute, deleteRoute} = require('../controller/controller')

// todolistRoute route
router.get('/', getRoute)
router.post('/',postRoute)
router.put('/:id',putRoute)
router.delete('/:id',deleteRoute)

module.exports = router;