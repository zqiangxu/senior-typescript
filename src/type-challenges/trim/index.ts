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
export { Trim };
