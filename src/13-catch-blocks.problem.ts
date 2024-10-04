import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") throw new Error("Failure!");

  } catch (e) {
    if (e instanceof Error) return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});

/**
 * 1. a few solutions. one is to set (e) to any (don't do this obv)
 * 2. another is `(e as Error).message`, coercing it as an error
 *    not perfect because it relies on the throw to be the full error,
 *    for example we could throw 'message' and the catch would return undefined
 * 3. last solution is above, using `instanceof`. similar to `typeof`
 * 
 */