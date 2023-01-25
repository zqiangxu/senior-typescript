/**
 * 获取数组第一个类型
 */
type First<T extends readonly any[]> = T extends readonly [infer head, ...any[]] ? head : never;

type R1 = First<['a', 'b', 'c']>; // a
type R2 = First<[3, 2, 1]>; // 3

const array = [1,2,3]
type R7 = First<typeof array>; // never

const readonlyArray = [1,2,3] as const;
type R8 = First<typeof readonlyArray>; // 1

export { First };