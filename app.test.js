import supertest from "supertest"
import app from "./app.js"
import request from "superagent"
// import { request } from "http"

describe("POST /users", () => {
    
    describe("given username and password", () => {
        // password dan username harus di save ke database
        // respon dengan json object dengan isi user_id


        // respon status code 200
        test("respon status code 200", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })

        // harus spesifik json di content type header
    })

    describe("when username and password wrong", () => {
        // respon statuscode 400
    })




})