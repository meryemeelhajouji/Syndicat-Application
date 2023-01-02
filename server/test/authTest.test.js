const supertest = require("supertest");
const app = require("../server");
describe("auth", () => {
  it("register ", async () => {
    const res = await supertest(app).post("/api/auth/register").send({
      name: "rrrr",
      email: "rrrr@gmail.com",
      password: "12345678",
      password2: "12345678",
    });
    expect(res.statusCode).toEqual(201);
  });

  it("login ", async () => {
    const res = await supertest(app).post("/api/auth/login").send({
      email: "mery@gmail.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(200);
  });
});
