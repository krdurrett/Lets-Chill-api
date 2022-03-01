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

app.post('/api/v1/log', (request, response) => {
  const id = Date.now()
  const entry = request.body
 
  for (let requiredParameter of ['date', 'feeling', 'action']) {
    if (!entry[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { date: <String>, feeling: <String>, action: <String>}. You're missing a "${requiredParameter}" property`})
    }
  }

  const { date, feeling, action, helped } = entry

  if (typeof date !== 'string') {
    return res.status(422).json({
      message: `Invalid date type. Must be a string`
    })
  }

  if (typeof feeling !== 'string') {
    return res.status(422).json({
      message: `Invalid feeling type. Must be a string`
    })
  }

  if (typeof action !== 'string') {
    return res.status(422).json({
      message: `Invalid action type. Must be a string`
    })
  }

  if (typeof helped !== 'boolean') {
    return res.status(422).json({
      message: `Invalid helped type. Must be a boolean`
    })
  }

  
  app.locals.log.push({ id, date, feeling, action, helped })
  response.status(201).json({ id, date, feeling, action, helped })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})