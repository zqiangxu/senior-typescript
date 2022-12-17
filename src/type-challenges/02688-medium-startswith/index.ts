type StartsWith<T extends string, U extends string, Sub extends string = ''> = T extends `${infer D}${infer F}`
  ? `${Sub}${D}` extends U
    ? true
    : StartsWith<F, U, `${Sub}${D}`>
  : false;

type a = StartsWith<'abc', 'ac'>; // expected to be false
type b = StartsWith<'abc', 'ab'>; // expected to be true
type c = StartsWith<'abc', 'abcd'>; // expected to be false

// best
// 神奇的写法. 使用 ${string} 来代表任意的字符串
type BestStartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

type a1 = BestStartsWith<'abc', 'ac'>; // expected to be false
type b1 = BestStartsWith<'abc', 'ab'>; // expected to be true
type c1 = BestStartsWith<'abc', 'abcd'>; // expected to be false

export { StartsWith };
