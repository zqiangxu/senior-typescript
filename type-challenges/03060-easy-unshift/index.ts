type Unshift<T extends readonly any[], U> = [U, ...T];

type Result1 = Unshift<[], 1>;
type Result2 = Unshift<[1, 2], 0>;
type Result3 = Unshift<['1', 2, '3'], boolean>;

export { Unshift };
