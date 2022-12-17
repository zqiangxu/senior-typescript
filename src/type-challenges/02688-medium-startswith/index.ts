type StartsWith<T extends string, U extends string, Sub extends string = ''> = T extends `${infer D}${infer F}`
  ? `${Sub}${D}` extends U
    ? true
    : StartsWith<F, U, `${Sub}${D}`>
  : false;

type a = StartsWith<'abc', 'ac'>; // expected to be false
type b = StartsWith<'abc', 'ab'>; // expected to be true
type c = StartsWith<'abc', 'abcd'>; // expected to be false

export { StartsWith };
