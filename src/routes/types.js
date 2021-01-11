import express from 'express'
import mongoose from 'mongoose'
import { Type } from '../models'

function getTypesRoutes() {
  const router = express.Router()

  router.get('/all', getAllTypes)
  router.post('/create', createType)

  return router
}

async function getAllTypes(req, res) {
  res.send('Pegando todos os tipos')
}

async function createType(req, res) {
  // preciso receber do front?
  // nome do tipo
  const { name } = req.body

  // FAIL FIRST
  if (!name)
    res.status(400).json({
      success: false,
      message: 'O nome do tipo é obrigatório',
    })

  const newType = new Type({
    _id: new mongoose.Types.ObjectId(),
    name,
  })

  await newType.save()

  res.json({
    success: true,
    newType,
  })
}

//export default getTypesRoutes
export { getTypesRoutes }
