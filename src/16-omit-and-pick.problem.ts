import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// can only be used into types from interfaces
// Omit doesn't autocomplete but pick does, this is a problem we'll eventually tackle
type MyType = Omit<User, 'id'>;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
