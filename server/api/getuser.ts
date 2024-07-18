export default defineEventHandler(async (event: any) => {
  const data = await prisma.user.findMany()

  return data
})