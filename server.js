require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const feelings = require('./data/feelings.js')
const actions = require('./data/actions.js')

app.use(express.json())
app.use(cors())
app.set('port', process.env.PORT || 3001)
app.locals = {
  title: 'Let\'s Chill',
  feelings,
  actions
}

app.get('/', (request, response) => {
  response.send('Get ready to chill out!')
})

app.get('api/v1/feelings', (request, response) => {
  const feelings = app.locals.feelings

  response.status(200).json({ feelings })
})

app.get('api/v1/feelings/:id', (request, response) => {
  const { id } = request.params
  const feeling = app.locals.feelings.find(feeling => feeling.id === parseInt(id))
  if (!feeling) {
    return response.status(404).json({
      message: `No feeling found with the id of #${id}.`
    })
  }

  response.status(200).json({ feeling })
})

app.get('api/v1/actions', (request, response) => {
  const actions = app.locals.actions

  response.status(200).json({ actions })
})

app.get('api/v1/actions/:id', (request, response) => {
  const { id } = request.params
  const action = app.locals.actions.find(action => action.id === parseInt(id))
  if (!action) {
    return response.status(404).json({
      message: `No action found with the id of #${id}.`
    })
  }

  response.status(200).json({ action })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})