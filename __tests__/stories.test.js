const request = require("supertest");
const app = require("../app.js");
const seed = require("../db/data/seedTest");
const mongoose = require("mongoose");

jest.setTimeout(13000);
beforeEach(() => seed());
afterAll(() => mongoose.disconnect());

describe("/api/stories/", () => {
  describe("STATUS 200", () => {
    test("should respond with an array of story objects", () => {
      console.log("trexw test");
      return request(app)
        .get("/api/stories")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
        });
    });
  });
});
