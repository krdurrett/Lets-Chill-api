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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})