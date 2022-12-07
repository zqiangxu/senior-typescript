// 可以通过 never 排除

// 在 X extends Y 的条件类型语句中，若 X 是联合类型的范型，则会将联合类型的每一个可能的值代入进行独立计算，再将结果通过 | 组合起来。

// 所以 'a', 'b', 'c' 都会单独代入独立计算
// 'a' extends 'a' => never (排除)
// 'b' extends 'b' => 'b'
// 'c' extends 'c' => 'c'
type MyExclude<T, U extends T> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'>;

export { MyExclude };
