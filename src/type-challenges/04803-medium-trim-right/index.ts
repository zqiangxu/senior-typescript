type Blank = ' ' | '\t' | '\n';
type TrimRight<T extends string> = T extends `${infer S}${Blank}` ? TrimRight<S> : T;

type R1 = TrimRight<'   Hello World    '>;
type R2 = TrimRight<'str'>;
type R3 = TrimRight<'str '>;
type R4 = TrimRight<'     str     '>;
type R5 = TrimRight<'   foo bar  \n\t '>;
type R6 = TrimRight<''>;
type R7 = TrimRight<'\n\t '>;

export { TrimRight };
