export default defineEventHandler(async (event: any) => {

  const body = await readBody(event)

  const { username, password } = await readBody(event)

  const data = await prisma.user.create({
    data: {
      username,
      password
    },
  })

  return { data, body }
})