import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
  /**
   * using if (amount.amount), TS strict won't dicern unless the variable
   * exists absolutely. because amount.amount is a union, it will spit an error.
   * 
   * we can check if the union passed is an object via typeof, instead of
   * first checking if a numeric value is passed before parsing an obj
   */
  if (typeof amount === 'object') {
    return amount.amount;
  }
  return amount;

  // alt solution
  // if (typeof amount === 'number') return amount;
  // return amount.amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
