/**
 * 获取数组中间元素
 * @version 1.0.0
 */
type Middle<T extends unknown[]> = T['length'] extends 0 | 1 | 2
  ? T
  : T extends [unknown, ...infer M, unknown]
  ? Middle<M>
  : never;

type R1 = Middle<[1, 2, 3, 4, 5]>; // [3]
type R2 = Middle<[1, 2, 3, 4, 5, 6]>; // [3, 4]
type R3 = Middle<[1, 2, 3, 4]>; // [2, 3]
type R4 = Middle<[1, 2, 3]>; // [2]
type R5 = Middle<[1, 2]>; // [1, 2]
type R6 = Middle<[1]>; // [1]
type R7 = Middle<[never]>;
type R8 = Middle<[() => string, () => number]>;

export {Middle}