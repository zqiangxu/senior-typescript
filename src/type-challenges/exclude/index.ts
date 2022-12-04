// 可以通过 never 排除
type MyExclude<T, U extends T> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'>;
