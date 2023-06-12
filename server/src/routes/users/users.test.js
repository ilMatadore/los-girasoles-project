const request = require('supertest');
const app = require('../../app');

describe('Test GET /users', () => {
    test('Should respond with 200 success', async () => {
        const response = await request(app).get('/user')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('Test POST /users', () => {
    test('Should respond with 200 success', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: "vbear@test.com",
                password: "test",
            })
            .expect('Content-Type', /json/)
            .expect(200)
    });

    test('It should catch missing props', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            email: "vbear@test.com",
            password: "f"
        })
        .expect('Content-Type', /json/)
        .expect(400);

        expect(response.body).toStrictEqual(
            { error: "Nombre de usuario y/o contraseña incorrecta"}
        )
    })
    
});

