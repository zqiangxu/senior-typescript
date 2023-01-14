type SnakeCase<T extends string, IsFirst = true> = T extends `${infer F}${infer R}`
  ? `${IsFirst extends true ? Lowercase<F> : F extends Uppercase<F> ? `_${Lowercase<F>}` : F}${SnakeCase<R, false>}`
  : T;

type res1 = SnakeCase<'hello'>; // => "hello"
type res2 = SnakeCase<'userName'>; // => "user_name"
type res3 = SnakeCase<'getElementById'>; // => "get_element_by_id"
type res4 = SnakeCase<'GetElementById'>; // => "get_element_by_id"

export { SnakeCase };
