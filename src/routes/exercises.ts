import type { FastifyReply as Reply, FastifyRequest as Request } from 'fastify'

export default async function exercises(req: Request, reply: Reply) {
  // @ts-ignore
  const { subject, level } = req.params
  console.log({ subject, level })

  reply.render('pages/exercises', {
    id: 1,
    subject,
    page: 1,
    lang: 'es',
    level,
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
  })
  
  await reply
}
