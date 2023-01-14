type NumberToArray<N extends number, Result extends any[] = []> = Result['length'] extends N
  ? Result
  : NumberToArray<N, [1, ...Result]>;

type N1 = NumberToArray<1>;
type N2 = NumberToArray<10>;

// 很简单的一道题，把所有的元素和转换为数组最后比较即可
type TwoSum<T extends number[], Sum extends number, Result extends any[] = []> = T extends [
  infer First extends number,
  ...infer Rest extends number[]
]
  ? TwoSum<Rest, Sum, [...Result, ...NumberToArray<First>]>
  : Result['length'] extends Sum
  ? true
  : false;

type R1 = TwoSum<[3, 3], 6>;
type R2 = TwoSum<[3, 2, 4], 6>;
type R3 = TwoSum<[2, 7, 11, 15], 15>;
type R4 = TwoSum<[2, 7, 11, 15], 9>;
type R5 = TwoSum<[1, 2, 3], 0>;
type R6 = TwoSum<[1, 2, 3], 1>;
type R7 = TwoSum<[1, 2, 3], 2>;
type R8 = TwoSum<[1, 2, 3], 3>;
type R9 = TwoSum<[1, 2, 3], 4>;
type R10 = TwoSum<[1, 2, 3], 5>;
type R11 = TwoSum<[1, 2, 3], 6>;
type R12 = TwoSum<[3, 2, 0], 2>;

export { TwoSum };
