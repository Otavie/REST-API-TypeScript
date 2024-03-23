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

    it('GET /calculator/:id should return calculation by ID', async () => {
        const response = await request.get('/calculator/123')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message', 'Get Calculation by ID')
        expect(response.body).toHaveProperty('id', '123')
        expect(response.body).toHaveProperty('result', 1)
    })

    it('POST /calculator should create a new calculation', async() => {
        const requestBody = { operator: '+', operand1: 2, operand2: 4 }
        const response = await request.post('/calculator').send(requestBody)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message', 'Create a new calculation')
        expect(response.body).toHaveProperty('data')
        expect(typeof response.body.data).toBe('number')
        expect(response.body.data).toBe(6)
    })

    it('PUT /calculator/:id should update a calculation by ID', async() => {
        const response = await request.put('/calculator/123').send({})

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message', 'Update calculation by ID')
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('id', '123')
        expect(response.body).toHaveProperty('timeStamp')
        expect(typeof response.body.data).toBe('string')
    })

    it('DELETE /calculator/:id should delete a calculation by ID', async() => {
        const response = await request.delete('/calculator/123')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message', 'Delete calculation by ID')
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('id', '123')
        expect(response.body).toHaveProperty('timeStamp')
        expect(typeof response.body.data).toBe('string')
    })
    
})