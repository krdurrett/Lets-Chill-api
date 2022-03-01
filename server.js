const express = require('express')
const app = express()
const cors = require('cors')
const feelings = require('./data/feelings.js')
const actions = require('./data/actions.js')
const log = require('./data/log.js')
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.set('port', process.env.PORT || 3001)
app.locals = {
  title: 'Let\'s Chill',
  feelings,
  actions,
  log
}

app.get('/', (request, response) => {
  response.send('Get ready to chill out!')
})

app.get('/api/v1/feelings', (request, response) => {
  const feelings = app.locals.feelings
  response.status(200).json(feelings)
})

app.get('/api/v1/feelings/:id', (request, response) => {
  const { id } = request.params
  const { feelings } = app.locals
  const feeling = feelings.find(feeling => feeling.id === parseInt(id))
  if (!feeling) {
    return response.status(404).json({
      message: `No feeling found with the id of #${id}.`
    })
  }

  response.status(200).json(feeling)
})

app.get('/api/v1/actions', (request, response) => {
  const actions = app.locals.actions

  response.status(200).json(actions)
})

app.get('/api/v1/actions/:id', (request, response) => {
  const { id } = request.params
  const { actions } = app.locals
  const action = actions.find(action => action.id === parseInt(id))
  if (!action) {
    return response.status(404).json({
      message: `No action found with the id of #${id}.`
    })
  }

  response.status(200).json(action)
})

app.get('/api/v1/log', (request, response) => {
  const log = app.locals.log

  response.status(200).json(log)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})