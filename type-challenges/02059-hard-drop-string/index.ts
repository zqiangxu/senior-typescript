type StringToUnion<S extends string> = S extends `${infer First}${infer Other}` ? First | StringToUnion<Other> : never;

type DropString<T extends string, C extends string> = T extends `${infer First}${infer Remain}`
  ? // 比较简单，把字符串转成 Union . 然后遍历即可
    `${First extends StringToUnion<C> ? '' : First}${DropString<Remain, C>}`
  : '';

type Butterfly = DropString<'foobar!', 'fb'>; // 'ooar!'

type D1 = DropString<'butter fly!', ''>;
type D2 = DropString<'butter fly!', ' '>;
type D3 = DropString<'butter fly!', 'but'>;
type D4 = DropString<' b u t t e r f l y ! ', 'but'>;
type D5 = DropString<'    butter fly!        ', ' '>;
type D6 = DropString<' b u t t e r f l y ! ', ' '>;
type D7 = DropString<' b u t t e r f l y ! ', 'but'>;
type D8 = DropString<' b u t t e r f l y ! ', 'tub'>;
type D9 = DropString<' b u t t e r f l y ! ', 'b'>;
type D10 = DropString<' b u t t e r f l y ! ', 't'>;

export { DropString };
