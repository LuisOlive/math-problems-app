import type { FastifyReply as Reply, FastifyRequest as Request } from 'fastify'

export default function api(req: Request, reply: Reply) {
  console.log(req.query.level)
  console.log(req.params.subject)

  return {
    id: 1,
    subject: 'algebra',
    page: 1,
    lang: 'es',
    level: 'easy',
    instruction: 'Realize las siguientes operaciones con expresiones',
    exercises: [
      {
        id: 1,
        problem: '2x + 12xy / 4y'
      },
      {
        id: 2,
        problem: '2x + 12xy / 4y'
      }
    ]
  }
}
