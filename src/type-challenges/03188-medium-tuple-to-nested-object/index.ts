type TupleToNestedObject<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? First extends PropertyKey
    ? // 类似 key in 'A' | 'B'
      { [P in First]: TupleToNestedObject<Rest, U> }
    : U
  : U;

type a = TupleToNestedObject<['a'], string>; // {a: string}
type b = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
type c = TupleToNestedObject<['a', 'b', 'c'], number>; // {a: {b: {c: number}}}
type d = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

export { TupleToNestedObject };
