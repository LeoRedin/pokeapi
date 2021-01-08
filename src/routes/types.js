import express from 'express'

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
  // console.log(req.body)
  // res.send('Funcionou o post')

  // @TODO
  /* Salvar no BD esse tipo */

  const { user } = req.body

  if (user !== 'Leo') {
    res.status(403).json({
      message: 'Permissão negada',
    })
  }

  res.status(201).json({
    success: true,
    createdBy: user,
    date: new Date(),
  })
}

//export default getTypesRoutes
export { getTypesRoutes }
