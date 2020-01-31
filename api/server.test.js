const db = require("../database/dbConfig")
const server = require("./server")
const supertest = require("supertest")

beforeEach(async () => {
    await db('users').truncate()
})

const userData = {
    username: "billytest7",
    password: "pass1234"
}

describe("Register", () => {
    test("Register successful", async () => {
        const res = await supertest(server)
            .post('/api/auth/register')
            .send(userData)
        expect(res.status).toBe(200)
    })

    test("Register failure", async () => {
        const res = await supertest(server)
            .post('/api/auth/register')
            .send({ username: "test" })
        expect(res.status).toBe(500)
    })
})

describe("Log in", () => {
    test("Login successful", async () => {
        const res = await supertest(server)
            .post('/api/auth/login')
            .send(userData)
        expect(res.headers.connection).toBe('close')
    })

    test("Login fail", async () => {
        const res = await supertest(server)
            .post('/api/auth/login')
            .send(userData)
        expect(res.status).toBe(404)
    })
})

describe("Get jokes", () => {
    test("Get jokes type JSON", async () => {
        const res = await supertest(server)
            .get('/api/jokes/')
            expect(res.type).toMatch('application/json')
    })

    test("Get jokes unauthorized access", async () => {
        const res = await supertest(server)
            .get('/api/jokes/')
            expect(res.status).toBe(400)
    })
}) 