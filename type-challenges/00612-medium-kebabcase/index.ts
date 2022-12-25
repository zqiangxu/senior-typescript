type AllKebabCase<T extends string> = T extends `${infer D}${infer F}`
  ? D extends Lowercase<D>
    ? `${D}${AllKebabCase<F>}`
    : `-${Lowercase<D>}${AllKebabCase<F>}`
  : T;

type KebabCase<T extends string> = AllKebabCase<T> extends `-${infer D}` ? D : T;

type Result1 = KebabCase<'FooBarBaz'>;
type Result2 = KebabCase<'A12'>;

type BestKebabCase<T extends string> = T extends `${infer D}${infer F}`
  ? // 第一个字母始终小写. 后面匹配首字母转小写相同则不做处理
    F extends Uncapitalize<F>
    ? `${Lowercase<D>}${BestKebabCase<F>}`
    : `${Lowercase<D>}-${BestKebabCase<F>}`
  : T;

type A = Uncapitalize<'ABC12'>;

type Result3 = BestKebabCase<'FooBarBaz'>;
type Result4 = BestKebabCase<'A12'>;

export { KebabCase };
