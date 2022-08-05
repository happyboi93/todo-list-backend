const router = require('express').Router()
// Imoorr todolistschaema
const todolistModel = require('../models/todolistitems')
// create our todolist route and add item
const getRoute = router.get('/api/item',async(req,res)=>{
  try {
    const allTodoList = await todolistModel.find({})
    console.log(req.params.id)
    res.status(200).json(allTodoList)
  } catch (e) {
    res.json(e)
  }
})
const postRoute = router.post('/api/item', async(req,res)=>{
  try {
    const newItem = new todolistModel({
      item: req.body.item
    })
    //save this item in database
    const saveItem = await newItem.save()
    res.status(200).json('items added sucessfully')
    console.log('updated')
  } catch (e) {
    res.json(e)
  }
})

const putRoute = router.put('/api/item/:id', async (req,res)=>{
  // try catch method
//   try {
//   // find item by id 
//    const updateItem = await todolistModel.findById(req.params.id)
//   // assign id to item
//    Object.assign(updateItem, req.body)
//  // save updated item
//    await updateItem.save()
//    // send updated Item
//    res.status(200).json({data: updateItem,msg: 'updated sucessfully'})
//   } catch (e) {
//     res.json(e,'id not found')
//   }
 try {
   const updateItem = await todolistModel.findByIdAndUpdate(req.params.id,{$set: req.body})
   res.status(200).send('item updated')
 } catch (e) {
   res.json(e)
 }
})

const deleteRoute = router.delete('/api/item/:id', async (req,res)=>{
  try {
   const updateItem = await todolistModel.findById(req.params.id)
   Object.assign(updateItem, req.body)
    await updateItem.remove()
   res.status(200).json({data: true,msg:'item deleted sucessfully'})
  } catch (e) {
    res.json(e, 'item not deleted')
  }
})


module.exports = {getRoute,postRoute,putRoute, deleteRoute}