// 这里的 Arr 用来统计层级
type FlattenDepth<T extends readonly any[], Depth extends number = 1, Arr extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? // 判断下层级是否满足要求了
      Arr['length'] extends Depth
      ? [First, ...FlattenDepth<Rest, Depth, Arr>]
      : // 还不满足层级要求，则加多一层
        [...FlattenDepth<First, Depth, [1, ...Arr]>, ...FlattenDepth<Rest, Depth, Arr>]
    : [First, ...FlattenDepth<Rest, Depth, Arr>]
  : [];

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flatten 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
type c = FlattenDepth<[]>; // []
type d = FlattenDepth<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type e = FlattenDepth<[1, [2]]>; // [1, 2]
type f = FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>; // [1, 2, 3, 4, [5]]
type g = FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>; // [1, 2, 3, 4, 5]
export { FlattenDepth };
