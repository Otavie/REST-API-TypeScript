import { request } from './setup'

describe('Calculator Routes', () => {
    it ('GET /calculator should return all calculations', async () => {
        // Send a GET request to the /calculator endpoint
        const response = await request.get('/calculator')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message', 'Get all Calculations')
        expect(response.body).toHaveProperty('data')
        expect(Array.isArray(response.body.data)).toBe(true)
    })

})