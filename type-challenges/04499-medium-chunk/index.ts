type Chunk<
  T extends readonly any[],
  N extends number,
  CountArray extends any[] = [],
  GroupArray extends any[] = []
> = CountArray['length'] extends N
  ? // 如果计数数组中的元素格式 = N，那么表示一组元素已经分组完成
    [GroupArray, ...Chunk<T, N, []>]
  : T extends [infer First, ...infer Rest]
  ? // 否则继续下一次递归，把当前第一个元素 First 放到分组的最后面，计数数组元素增加1
    Chunk<Rest, N, [...CountArray, 1], [...GroupArray, First]>
  : GroupArray extends []
  ? [] // 数组的总长度小于 N. 或者不被 N 整除，直接返回已经分组的数据
  : [GroupArray];

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
type exp4 = Chunk<[1, true, 2, false], 2>; // [[1, true], [2, false]]
type exp5 = Chunk<[1, 2, 3, 4], 5>; // [[1, 2, 3, 4]]
type exp6 = Chunk<[1, 2, 3, 4], 2>; // [[1, 2], [3, 4]]

export { Chunk };
