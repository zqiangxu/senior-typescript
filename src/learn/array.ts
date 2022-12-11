type ArrayTuple = ['a', 'b'];

// type 的数组可以...遍历 => ['a', 'b']
type CopyArray = [...ArrayTuple];

const ArrayTuple = ['a', 'b'] as const;

// 如果是 const. 先用 typeof 转成 TS 类型 => ['a', 'b']
type CopiedArray = [...typeof ArrayTuple];

type ToArray<T> = T extends T ? [T] : never;

// => ['A'] | ['B'] | ['C']
type ArrayType = ToArray<'A' | 'B' | 'C'>;

// =>
type ConstituteArray<T, K = T> = K extends K ? [K, ...ConstituteArray<Exclude<T, K>>] : never;

// => never
type ConstituteArrayType = ConstituteArray<'A' | 'B'>;

type Permutation<T, U = T> = [T] extends [never] ? [] : U extends T ? [U, ...Permutation<Exclude<T, U>>] : never;

//  ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
type perm = Permutation<'A' | 'B' | 'C'>;

export { ToArray, ConstituteArray, Permutation };
