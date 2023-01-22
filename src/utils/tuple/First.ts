/**
 * 获取数组第一个类型
 */
type First<T extends any[]> = T extends [infer head, ...any[]] ? head : never;

type R1 = First<['a', 'b', 'c']>; // a
type R2 = First<[3, 2, 1]>; // 3

export { First };