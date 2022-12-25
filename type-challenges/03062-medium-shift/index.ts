type Shift<T extends readonly any[]> = T extends [infer First, ...infer F] ? F : [];

type Result = Shift<[3, 2, 1]>;

export { Shift };
