// Imoorr todolistschaema
const todolistModel = require('../models/todolistitems')
// create our todolist route and add item
const getRoute = ('/',async(req,res)=>{
  try {
    const allTodoList = await todolistModel.find({})
    res.status(200).json(allTodoList)
    console.log(allTodoList)
  } catch (e) {
    res.json(e)
  }
})
const postRoute = ('/', async(req,res)=>{
  try {
    const newItem = new todolistModel({
      item: req.body.item
    })
    //save this item in database
    const saveItem = await newItem.save()
    res.status(200).json('items added sucessfully')
    console.log(saveItem)
  } catch (e) {
    res.json(e)
  }
})

const putRoute = ('/', async (req,res)=>{
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
   console.log(updateItem)
 } catch (e) {
   res.json(e)
 }
})

const deleteRoute = ('/', async (req,res)=>{
  try {
   const updateItem = await todolistModel.findById(req.params.id)
   Object.assign(updateItem, req.body)
    await updateItem.remove()
   res.status(200).json({data: true,msg:'item deleted sucessfully'})
   console.log(deleteRoute)
  } catch (e) {
    res.json(e, 'item not deleted')
  }
})


module.exports = {getRoute,postRoute,putRoute, deleteRoute}