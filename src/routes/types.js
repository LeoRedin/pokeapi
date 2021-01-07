import express from 'express'

function getTypesRoutes() {
  const router = express.Router()

  router.get('/all', getAllTypes)

  return router
}

async function getAllTypes(req, res) {
  res.send('Pegando todos os tipos')
}

//export default getTypesRoutes
export { getTypesRoutes }
