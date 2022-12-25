type WhiteSpace = ' ';
type Trim<T extends string> = T extends `${WhiteSpace}${infer D}`
  ? Trim<D>
  : T extends `${infer D}${WhiteSpace}`
  ? Trim<D>
  : T;
type Result1 = Trim<'  Hello World  '>;
type Result2 = Trim<'      Hello World      '>;
type Result3 = Trim<'Hello       '>;
type Result4 = Trim<' '>;

// Best
type BestWhiteSpace = ' ' | '\n' | '\t';
type BestTrim<T extends string> = T extends `${BestWhiteSpace}${infer D}` | `${infer D}${BestWhiteSpace}`
  ? BestTrim<D>
  : T;

type Result5 = BestTrim<'  Hello World  '>;
type Result6 = BestTrim<'      Hello World      '>;
type Result7 = BestTrim<'Hello       '>;
type Result8 = BestTrim<' '>;
type Result9 = BestTrim<`
Hello World

`>;

export { Trim };
