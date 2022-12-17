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

// 使用 ${string} 代替任意的字符串。TS 支持这种后缀匹配. 参考: 02688-medium-startswith
type BestEndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

type a1 = BestEndsWith<'abc', 'bc'>; // expected to be true
type b1 = BestEndsWith<'abc', 'abc'>; // expected to be true
type c1 = BestEndsWith<'abc', 'd'>; // expected to be false
type d1 = BestEndsWith<'', ''>; // expected to be false

export { EndsWith, BestEndsWith };
