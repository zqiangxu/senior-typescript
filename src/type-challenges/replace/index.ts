type WhiteSpace = ' ' | '\n' | '\t';

type Replace<T extends string, From extends string, To extends string> = From extends ''
  ? T
  : T extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : T;

type replaced = Replace<'types are fun!', 'fun', 'awesome'>;
type replaced2 = Replace<'types are fun!', '', 'awesome'>;

export { Replace };
