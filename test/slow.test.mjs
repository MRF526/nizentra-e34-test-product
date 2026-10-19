import { test } from "node:test";
test("takes three minutes", async () => { await new Promise((done) => setTimeout(done, 180_000)); });
