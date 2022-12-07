type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends readonly any[]> = T[0];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>;

// 空数组 => T[0] => undefined

type arr3 = [];
type head3 = First<arr3>; // => undefined.

// 如果需要存在的时候返回 never

type BestFirst<T extends any[]> = T extends [infer head, ...any[]] ? head : never;

// => never
type head4 = BestFirst<arr3>;
type head5 = BestFirst<arr1>;

export { First, BestFirst };
