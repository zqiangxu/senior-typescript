// 如果 U 中没有元素了，直接返回 [] . 同样我们利用一个临时数组来表示当前运算的索引
type Zip<T extends readonly any[], U extends readonly any[], Arr extends any[] = []> = U[Arr['length']] extends [
  undefined
]
  ? []
  : // 如果 T 中没有元素了，也直接返回空数组
  Arr['length'] extends T['length']
  ? []
  : // 否则取出当前元素，并递归下一个元素组
    [[T[Arr['length']], U[Arr['length']]], ...Zip<T, U, [1, ...Arr]>];

type exp = Zip<[1, 2], [true, false]>;
type exp2 = Zip<[], []>;
type exp3 = Zip<[1, 2, 3], ['1', '2']>;
type exp4 = Zip<[], [1, 2, 3]>;
type exp5 = Zip<[[1, 2]], [3]>;
