const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("Notes are returned as json", async () => {
  await api.get("/api/blogs/").expect(200);
});

test("There are four notes", async () => {
  const response = await api.get("/api/blogs/");
  console.log(response);

  expect(response.body).toHaveLength(4);
});

afterAll(() => {
  mongoose.connection.close();
});
