export default defineEventHandler(() => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Backend Monfolio opérationnel'
  }
})