import { describe, it, before } from "mocha";
import { expect } from "chai";
import { Response, SuperTest, Test } from "supertest";
import request from "supertest";

import app from "../src/app";

describe("API tests", (): void => {
  let testApp: SuperTest<Test>;
  before(() => {
    testApp = request(app);
  });

  it('should return "Hello, World!" on the homepage', async () => {
    const res: Response = await testApp.get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello World!");
  });
});
