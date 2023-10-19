const request = require("supertest");
const app = require("../app");

describe("GET /test", () => {
    test("deberia responder con el código de estado 200", async () => {
        const res = await request(app).get("/test");

        expect(res.status).toBe(200);
    });
    
    test("deberia mostrar el mensaje 'Hola Mundo!'", async () => {
        const res = await request(app).get("/test");
        
        expect(res.body.message).toEqual("Hola Mundo!");
    });
})
