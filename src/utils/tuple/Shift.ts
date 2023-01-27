type Shift<T extends readonly unknown[]> = T extends readonly [unknown, ...infer Rest] ? Rest : never;

type R1 = Shift<['a', 'b', 'c', 'd']>; // ["b", "c", "d"]
type R2 = Shift<[3, 2, 1]>; // [2, 1]

const array = ["hello", "world"];
type R3 = Shift<typeof array>; // never

const readonlyArray = ["hello", "world"] as const;
type R4 = Shift<typeof readonlyArray>; // ["world"]

export { Shift }