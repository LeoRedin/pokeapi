import express from 'express'

import { getRoutes } from './router'

function startServer({ port = process.env.PORT } = {}) {
  console.log('porta', process.env.PORT)
  const app = express()

  app.use('/api', getRoutes())
  // localhost:5555/api/

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      console.log(`Rodando servidor na porta ${server.address().port}`)

      resolve(server)
    })
  })
}

// export default startServer
export { startServer }
