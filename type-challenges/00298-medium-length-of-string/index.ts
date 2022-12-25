// 如果不满足条件了，则返回空数组
type StringToArray<T extends String> = T extends `${infer F}${infer S}` ? [F, ...StringToArray<S>] : [];

type StringLength<T extends String> = StringToArray<T>['length'];
type Result = StringLength<'string'>;
type Result2 = StringLength<'kumiko'>;
type Result3 = StringLength<'Sound! Euphonium'>;
type Result4 = StringLength<''>;

export { StringLength };
