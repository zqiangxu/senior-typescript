// 如果字符串中存在满足 _ 条件的情况
type CamelCase<T extends string> = T extends `${infer FirstWord}_${infer Sub}`
  ? // 直接把 FirstWord 转小写. 然后后面的 Sub 首字母大写，后续的继续递归 CamelCase
    `${Lowercase<FirstWord>}${Sub extends `${infer FirstChar}${infer R}`
      ? `${Uppercase<FirstChar>}${CamelCase<R>}`
      : Sub}`
  : // 不满足直接转小写
    Lowercase<T>;

type camelCase1 = CamelCase<'hello_world_with_types'>; // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'>; // expected to be same as previous one
type camelCase3 = CamelCase<'foobar'>;
type camelCase4 = CamelCase<'FOOBAR'>;
type camelCase5 = CamelCase<'foo_bar'>;
type camelCase6 = CamelCase<'😎'>;
type camelCase7 = CamelCase<'-'>;

export { CamelCase };
