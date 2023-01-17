// 1、元组可以通过 ... 遍历
type Tuple = ['a', 'b'];
type A1 = [...Tuple];

// 2、数组使用 const 常量断言后，可以将数组类型变成元组类型。
const arr = ['a', 'b'] as const; // arr 类型为: readonly ['a', 'b']

export {}