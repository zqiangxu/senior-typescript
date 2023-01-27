type Shift<T extends readonly unknown[]> = T extends readonly [unknown, ...infer Rest] ? Rest : never;

type Result = Shift<[3, 2, 1]>;

export { Shift };
