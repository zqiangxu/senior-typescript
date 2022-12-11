type IsNotZero<T> = T extends 0 ? false : true;
type IsNotEmpty<T> = T extends '' ? false : true;
type IsNotEmptyArray<T> = T extends [] ? false : true;
type IsNotEmptyObject<T> = T extends Record<PropertyKey, never> ? false : true;
type IsTruthy<T> = T extends true ? true : false;

// PropertyKey => string | number | symbol
type AnyOf<T extends readonly any[]> = T[number] extends 0 | '' | Record<PropertyKey, never> | [] | false
  ? false
  : true;

type Sample1 = AnyOf<[1, '', false, [], {}]>;

type Sample2 = AnyOf<[0, '', false, [], {}]>;

type A = true | false | false | false;
const a: A = false;
export { AnyOf };
