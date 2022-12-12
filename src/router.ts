import type { FastifyInstance } from 'fastify'

import exercises from './routes/exercises'

export default function router(fastify: FastifyInstance, _: any, done: Function) {
  // home page
  fastify.get('/', (_, reply) => reply.render('index'))

  // exercises
  fastify.get('/ejercicios', (_, reply) => reply.render('pages/exercises'))
  fastify.get('/ejercicios/:subject/:level', exercises)

  done()
}
