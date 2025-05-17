import express from 'express'
import { LoadAdd, LoadGet } from '../Controllers/LoadController.js'

const loadRoute = express.Router(


)

loadRoute.post('/add',LoadAdd)
loadRoute.get('/data',LoadGet)

export default loadRoute