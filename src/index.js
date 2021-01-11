// import startServer from './start'
import { startServer, initializeMongo } from './start'

initializeMongo()
// executar a função que criei no outro arquivo
startServer()
