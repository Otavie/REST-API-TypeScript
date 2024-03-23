import { request } from './setup'

describe('Health Routes', () => {
  it ('Get /health should return 200 with expected body properties', async() => {
    // Send a GET request to the /health endpoint
    const response = await request.get('/health')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'My health is okay!')
    expect(response.body).toHaveProperty('timeStamp')
    expect(new Date(response.body.timeStamp)).toBeInstanceOf(Date)
  })
})
