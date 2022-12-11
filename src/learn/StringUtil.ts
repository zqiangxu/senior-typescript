type IsUpperString<T> = T extends `${infer D}` ? (T extends Uppercase<D> ? true : false) : false;
type A = IsUpperString<'string'>;
type B = IsUpperString<'HELLO'>;
