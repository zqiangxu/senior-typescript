type Unshift<T extends readonly any[], U> = [U, ...T];

type UnShiftResult1 = Unshift<[], 1>;
type UnShiftResult2 = Unshift<[1, 2], 0>;
type UnShiftResult3 = Unshift<['1', 2, '3'], boolean>;
