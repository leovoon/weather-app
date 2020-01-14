if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
const axios = require('axios')
const express = require('express')
const app = express()

var port = process.env.PORT || 3000;


app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
  const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto&lang=zh`
  axios({
    url: url,
    responseType: 'json'
  }).then(data => res.json(data.data.currently))
})

app.listen(port, () => {
  console.log('Server Started')
})