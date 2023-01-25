/**
 * 获取数组最后一个类型
 * @version 1.0.0
 */
type Last<T extends readonly unknown[]> = T extends readonly [...unknown[], infer D] ? D : never;

type R1 = Last<['a', 'b', 'c']>; // 'c'
type R2 = Last<[3, 2, 1]>; // 1
type R3 = Last<[string, 2, number]>; // number
type R4 = Last<[any, unknown]>; // unknown
type R5 = Last<[any, never]>; // never
type R6 = Last<[never]>; // never

const array = [1,2,3]
type R7 = Last<typeof array>; // never

const readonlyArray = [1,2,3] as const;
type R8 = Last<typeof readonlyArray>; // 3

export { Last };
