const app = require('../src/index')
const supertest = require('supertest')
const api = supertest(app)

describe('GET /v1',()=>{
    test('response status 200',async ()=>{
        const response = await api.get('/v1').send();
        expect(response.statusCode).toEqual(200)
    })    
})

describe('GET /location',()=>{
    test('response status 200', async ()=>{
        const response = await api.get('/location').send();
        expect(response.statusCode).toEqual(200)
    })
    
    test('should have a content-type: application/json in headers',async ()=>{
        const response = await api.get('/location').send();
        expect(response.headers["content-type"]).toMatch(/json/);
    })
})

describe('GET /current/:city',()=>{
    test('should have a content-type: application/json in headers',async ()=>{
        const response = await api.get('/current/:city?').send()
        expect(response.headers["content-type"]).toMatch(/json/);
    })
    
    test('body response should object',async ()=>{
        const response = await api.get('/current/:city?').send()
        expect(response.body).toBeInstanceOf(Object)
    })
})

describe('GET /forecast/:city?',()=>{
    test('should have a content-type: application/json in headers',async ()=>{
        const response = await api.get('/forecast/:city?').send()
        expect(response.headers["content-type"]).toMatch(/json/);
    })

    test('body response should object',async ()=>{
        const response = await api.get('/forecast/:city?').send()
        expect(response.body).toBeInstanceOf(Object)
    })
})