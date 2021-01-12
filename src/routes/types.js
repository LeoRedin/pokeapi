import express from 'express'
import mongoose from 'mongoose'
import { Type } from '../models'

function getTypesRoutes() {
  const router = express.Router()

  router.get('/all', getAllTypes)
  router.get('/:type', getByType)
  router.post('/create', createType)

  return router
}

async function getAllTypes(req, res) {
  const types = await Type.find({})

  res.json({
    types,
  })
}

async function getByType(req, res) {
  // @TODO pegar um único registro do banco
  const typeName = req.params.type

  const type = await Type.findOne({ name: typeName })

  res.json({
    success: true,
    type
  })
}

async function createType(req, res) {
  // preciso receber do front?
  // nome do tipo
  const { name, hex } = req.body

  // FAIL FIRST
  if (!name)
    res.status(400).json({
      success: false,
      message: 'O nome do tipo é obrigatório',
    })

  const newType = new Type({
    name,
    hex,
  })

  // @TODO como lidar com erros ao salvar :)
  await newType.save()

  res.json({
    success: true,
    newType,
  })
}

//export default getTypesRoutes
export { getTypesRoutes }
