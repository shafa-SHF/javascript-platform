const request = require("supertest");
const app = require("../../app");

test("login API returns token", async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ email: "test@mail.com", password: "123" });

  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
});

