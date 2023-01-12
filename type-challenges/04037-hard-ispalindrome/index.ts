type StringToArray<T extends string> = T extends `${infer First}${infer Rest}` ? [First, ...StringToArray<Rest>] : [];

type IsPalindromeArray<T extends string[]> = T['length'] extends 0 | 1
  ? true
  : T extends [infer First, ...infer Rest extends string[], infer Last]
  ? // 前后匹配. 则继续匹配子源
    First extends Last
    ? IsPalindromeArray<Rest>
    : false
  : false;

type IsPalindrome<T extends string | number> = IsPalindromeArray<StringToArray<`${T}`>>;

type R1 = IsPalindrome<'abc'>; // false
type R2 = IsPalindrome<121>; // true
type R3 = IsPalindrome<2>; // true
type R4 = IsPalindrome<'abba'>; // true
type R5 = IsPalindrome<''>;
type R6 = IsPalindrome<19260817>;
type R7 = IsPalindrome<'abcba'>;

export { IsPalindrome };
