// 比较简单的一题，没有要求出所有组合
type Subsequence<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? // 递归即可
    [First, ...Subsequence<Rest>] | Subsequence<Rest>
  : [];

type A = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]
type B = Subsequence<[1, 2, 3]>; // [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]

export { Subsequence };
