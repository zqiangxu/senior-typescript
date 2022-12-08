type MyCapitalize<T extends string> = T extends `${infer D}${infer F}` ? `${Uppercase<D>}${F}` : T;
type capitalized1 = MyCapitalize<'hello world'>;
type capitalized2 = MyCapitalize<'s'>;

export { MyCapitalize };
