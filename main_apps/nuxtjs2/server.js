const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const app = express()

const port = process.env.PORT || 3000

// Import and set Nuxt options
const config = require('./nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", '*')
  next()
})

// Give nuxt middleware to express
app.use(nuxt.render)

// Start express server
app.listen(port, () => {
  console.log(`Ready on http://localhost:${port}/`)
})
