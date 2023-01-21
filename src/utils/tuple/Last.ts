/**
 * 获取数组最后一个类型
 */
type Last<T extends any[]> = T extends [...any[], infer D] ? D : never;

type R1 = Last<['a', 'b', 'c']>; // 'c'
type R2 = Last<[3, 2, 1]>; // 1
type R3 = Last<[string, 2, number]>; // number
type R4 = Last<[any, unknown]>; // unknown
type R5 = Last<[any, never]>; // never
type R6 = Last<[never]>; // never

export { Last };
