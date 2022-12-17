type EndsWith<T extends string, U extends string> = T extends U
  ? true
  : T extends `${infer D}${infer F}`
  ? F extends U
    ? true
    : EndsWith<F, U>
  : false;

type a = EndsWith<'abc', 'bc'>; // expected to be true
type b = EndsWith<'abc', 'abc'>; // expected to be true
type c = EndsWith<'abc', 'd'>; // expected to be false
type d = EndsWith<'', ''>; // expected to be false
