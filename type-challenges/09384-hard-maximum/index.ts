type UniqueArray<T extends any[], Result extends any[] = []> = T extends [infer First, ...infer Rest]
  ? First extends Result[number]
    ? UniqueArray<Rest, Result>
    : UniqueArray<Rest, [...Result, First]>
  : Result;

type U1 = UniqueArray<[1, 2, 23, 3, 5, 3, 23, 1]>;

type RemoveElement<T extends any[], E> = T extends [infer First, ...infer Rest]
  ? E extends First
    ? [...RemoveElement<Rest, E>]
    : [First, ...RemoveElement<Rest, E>]
  : [];

type Maximum<T extends number[] = [], Nums extends any[] = [], U extends any[] = UniqueArray<T>> = U['length'] extends 0
  ? never
  : U['length'] extends 1
  ? U[0]
  : // 如果数组长度已经在元素中了.找到它并剔除
  Nums['length'] extends U[number]
  ? Maximum<RemoveElement<U, Nums['length']>, [1, ...Nums]>
  : Maximum<U, [1, ...Nums]>;

type M1 = Maximum<[]>; // never
type M2 = Maximum<[0, 2, 1]>; // 2
type M3 = Maximum<[1, 20, 200, 150]>; // 200
type M4 = Maximum<[1, 20, 200, 100, 200, 150]>; // 200

type Arr = [1, 20, 200, 150];
type E = Exclude<Arr[number], 1>;

export { Maximum };
