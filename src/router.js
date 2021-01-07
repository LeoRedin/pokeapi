import express from 'express'

import { getTypesRoutes } from './routes'

function getRoutes() {
  //criar um roteador para todas as rotas do app
  const router = express.Router()

  router.use('/types', getTypesRoutes())

  return router
}

export { getRoutes }
