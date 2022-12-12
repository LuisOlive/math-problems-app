import createFastify from 'fastify'
import pug from 'fastify-pug'
import router from './router'

// creating app
const fastify = createFastify()

// pug templates
fastify.register(pug, { views: 'templates', filename: view => `templates/${view}` })

// routes
fastify.register(router)

// running the server
fastify
  .listen({ port: 3000 })
  .then(() => console.log('server ready'))
  .catch(err => {
    fastify.log.error(err)
    process.exit(1)
  })
