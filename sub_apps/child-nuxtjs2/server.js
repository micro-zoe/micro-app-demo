const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 4003

// Import and set Nuxt options
const config = require('./nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", '*')
  next()
})

// Start express server
app.listen(port, host, () => {
  console.log(`Server is listening on port: ${port}`)
})
