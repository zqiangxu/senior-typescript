// When conditional types act on a generic type, they become distributive when given a union type.

// 在 X extends Y 的条件类型语句中，若 X 是联合类型的范型，则会将联合类型的每一个可能的值代入进行独立计算，再将结果通过 | 组合起来。

type TypedArray<T> = T extends any ? T[] : never;

// string[] | number[]
type typed = TypedArray<string | number>;
