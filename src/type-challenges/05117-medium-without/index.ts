type InArray<E, A extends readonly any[]> = A extends [infer First, ...infer Rest]
  ? First extends E
    ? true
    : InArray<E, Rest>
  : false;

type In1 = InArray<1, [1, 2]>;
type In2 = InArray<'hello', [1, 2, 'hello']>;
type In3 = InArray<'boo', [1, 2, 'hello']>;

type IsArray<T> = T extends any[] ? true : false;
type IsA1 = IsArray<[]>;
type IsA2 = IsArray<[1, 2]>;
type IsA3 = IsArray<1>;

type Without<T extends readonly any[], WithoutData, Result extends any[] = []> = T extends [infer First, ...infer Rest]
  ? First extends WithoutData
    ? // 如果直接能匹配到，那么进行下一次递归
      Without<Rest, WithoutData, Result>
    : // 如果 WithoutData 是数组，那么还需要检查是否在数组中
    WithoutData extends any[]
    ? // 如果在数组中，那么移除当前元素
      InArray<First, WithoutData> extends true
      ? Without<Rest, WithoutData, Result>
      : // 如果不在数组中，那么插入当前元素
        Without<Rest, WithoutData, [...Result, First]>
    : Without<Rest, WithoutData, [...Result, First]>
  : Result;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

export { Without };
