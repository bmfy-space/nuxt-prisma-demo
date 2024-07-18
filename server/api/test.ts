export default defineEventHandler(async (event: any) => {

  return {
    code: 200,
    data: {
      name: 'test'
    }
  }
})