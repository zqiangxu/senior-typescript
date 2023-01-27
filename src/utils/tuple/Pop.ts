/**
 * 移除数组的最后一个元素
 * @version 1.0.0
 */
type Pop<T extends readonly unknown[]> = T extends readonly [...infer D, unknown] ? D : never;

type R1 = Pop<['a', 'b', 'c', 'd']>;
type R2 = Pop<[3, 2, 1]>;

const array = ["hello", "world"];
type R3 = Pop<typeof array>; // never

const readonlyArray = ["hello", "world"] as const;
type R4 = Pop<typeof readonlyArray>; // never

export { Pop }