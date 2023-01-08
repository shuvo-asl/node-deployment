describe("Sample Test",()=>{
    it("should test that true === true",()=>{
        expect(true).toBe(true)
    })
})

const request = require('supertest')
const app = require('../server')

describe('Root Endpoint', () => { 
    it('shoudl be create a new get request',async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual("Hello World");
    })
 })