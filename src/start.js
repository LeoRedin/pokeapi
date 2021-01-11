import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { getRoutes } from './router'

function initializeMongo() {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado com sucesso no mongo'))
    .catch(err => console.err(err))
}

function startServer({ port = process.env.PORT } = {}) {
  // console.log('porta', process.env.PORT)
  const app = express()

  app.use(bodyParser.json())

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
export { startServer, initializeMongo }
