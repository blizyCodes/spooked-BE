const request = require("supertest");
const app = require("../app.js");
const seed = require("../db/data/seedTest");
const mongoose = require("mongoose");

jest.setTimeout(15000);
beforeEach(() => seed());
afterAll(() => mongoose.disconnect());

describe("/api/topics/", () => {
  describe("STATUS 200", () => {
    test("should respond with an array of topic objects containing slug and description properties", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then(({ body: topics }) => {
          expect(topics).toHaveLength(3);
          topics.forEach((topic) => {
            expect(topic).toEqual(
              expect.objectContaining({
                slug: expect.any(String),
                description: expect.any(String),
              })
            );
          });
        });
    });
  });
});

describe("/api/users/", () => {
  describe("STATUS 200", () => {
    test("should respond with an array of user objects containing userName, info and avatar properties", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body: users }) => {
          expect(users).toHaveLength(3);
          users.forEach((user) => {
            expect(user).toEqual(
              expect.objectContaining({
                userName: expect.any(String),
                info: expect.any(String),
                avatar: expect.any(String),
              })
            );
          });
        });
    });
  });
});
