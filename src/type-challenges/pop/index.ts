type Pop<T extends readonly any[]> = T extends [...infer D, any] ? D : never;

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>;
type re2 = Pop<arr2>;
