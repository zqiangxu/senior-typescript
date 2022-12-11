type StringToUnion<T extends string> = T extends `${infer D}${infer F}` ? D | StringToUnion<F> : never;

type Test = '123';
type Result = StringToUnion<Test>;

// => never
type Result2 = StringToUnion<''>;

export { StringToUnion };
