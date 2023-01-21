type Blank = ' ' | '\t' | '\n';
type TrimLeft<T extends string> = T extends `${Blank}${infer D}` ? TrimLeft<D> : T;

type Result1 = TrimLeft<'  Hello World  '>;
type Result2 = TrimLeft<'      Hello World  '>;
type Result3 = TrimLeft<'Hello'>;
type Result4 = TrimLeft<' '>;

export { TrimLeft };
