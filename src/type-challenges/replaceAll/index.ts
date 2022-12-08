type ReplaceAll<T extends string, From extends string, To extends string> = From extends To | ''
  ? T
  : T extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : T;

type replaced = ReplaceAll<'t y p e s', ' ', ''>;
type replaced1 = ReplaceAll<'foobar', 'bar', 'foo'>;
type replaced2 = ReplaceAll<'foobar', 'bag', 'foo'>;
type replaced3 = ReplaceAll<'foobarbar', 'bar', 'foo'>;
type replaced4 = ReplaceAll<'t y p e s', ' ', ''>;
type replaced5 = ReplaceAll<'foobarbar', '', 'foo'>;
type replaced6 = ReplaceAll<'barfoo', 'bar', 'foo'>;
type replaced7 = ReplaceAll<'foobarfoobar', 'ob', 'b'>;
type replaced8 = ReplaceAll<'foboorfoboar', 'bo', 'b'>;
type replaced9 = ReplaceAll<'', '', ''>;
