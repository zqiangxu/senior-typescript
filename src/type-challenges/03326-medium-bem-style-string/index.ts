type ConcatM<P extends string, M extends string[]> = M extends [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? `${P}--${First}` | ConcatM<P, Rest>
  : never;

type ConcatE<P extends string, M extends string[]> = M extends [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? `${P}__${First}` | ConcatE<P, Rest>
  : never;

// 非空字符串数组
type IsNotEmptyStringArray<A extends string[]> = A extends string[] ? (A['length'] extends 0 ? false : true) : false;
type BestIsNotEmptyStringArray<A extends string[]> = A extends [] ? false : true;

type BEM<B extends string, E extends string[], M extends string[]> = IsNotEmptyStringArray<E> extends true
  ? IsNotEmptyStringArray<M> extends true
    ? // 都不为空的情况下连接 BEM
      ConcatM<ConcatE<B, E>, M>
    : // 当 M 为空, 只拼接 BE
      ConcatE<B, E>
  : // 当 E 为空的时候，只拼接 BM
    ConcatM<B, M>;

type a = BEM<'btn', ['price', 'pp'], []>;
type b = BEM<'btn', ['price', 'pp'], ['warning', 'success']>;
type c = BEM<'btn', [], ['small', 'medium', 'large']>;

type Meta = 'Foo' | 'Boo';
type HelloMeta = `Hello ${Meta}`; // 'Hello Foo' | 'Hello Boo'

type MakeM<M extends string[]> = BestIsNotEmptyStringArray<M> extends true ? `--${M[number]}` : '';
type MakeE<E extends string[]> = BestIsNotEmptyStringArray<E> extends true ? `__${E[number]}` : '';
type BestBEM<B extends string, E extends string[], M extends string[]> = `${B}${MakeE<E>}${MakeM<M>}`;

type a1 = BestBEM<'btn', ['price', 'pp'], []>;
type b1 = BestBEM<'btn', ['price', 'pp'], ['warning', 'success']>;
type c1 = BestBEM<'btn', [], ['small', 'medium', 'large']>;

export { BEM, BestBEM };
