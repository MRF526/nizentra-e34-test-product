import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const page = () => readFileSync("dist/index.html", "utf8");
test("page has a title", () => assert.match(page(), /<title>E34 test product<\/title>/));
test("page greets", () => assert.match(page(), /Hello from the E34 test product/));
