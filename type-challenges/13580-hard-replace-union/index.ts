type GetCorrectValue<T, R extends [unknown, unknown][]> = R extends [
  ...infer Rest extends [unknown, unknown][],
  infer Last extends [unknown, unknown]
]
  ? [T] extends [Last[0]]
    ? Last[1]
    : GetCorrectValue<T, Rest>
  : T;

// 遍历即可
type UnionReplace<T, R extends [unknown, unknown][]> = T extends any ? GetCorrectValue<T, R> : never;

type R1 = UnionReplace<number | string, [[string, null]]>;

// Date -> string; Function -> undefined
type R2 = UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>;

export { UnionReplace };
