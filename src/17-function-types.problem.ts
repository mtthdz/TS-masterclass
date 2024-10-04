import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

// void is a special ts type for fns returning nothing
// we could also use undefined, but void is dedicated for this
// useful when we're passing fns into fns
type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
