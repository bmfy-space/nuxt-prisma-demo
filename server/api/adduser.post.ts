import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const { username, password } = await readBody(event)

  const data = await prisma.user.create({
    data: {
      username,
      password
    },
  })
  
  return body
})