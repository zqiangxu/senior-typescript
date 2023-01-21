type Blank = ' ' | '\t' | '\n';

/**
 * 移除前后空格
 * @version 1.0.0
 */
type Trim<T extends string> =
  // 移除左侧的空格
  T extends `${Blank}${infer D}`
    ? Trim<D>
    : // 移除右侧的空格
    T extends `${infer D}${Blank}`
    ? Trim<D>
    : T;

type Result1 = Trim<'  Hello World  '>;
type Result2 = Trim<'      Hello World      '>;
type Result3 = Trim<'Hello       '>;
type Result4 = Trim<' '>;
type Result5 = Trim<`
Hello World

`>;

/**
 * 一种更好的写法
 */
type BestTrim<T extends string> = T extends `${Blank}${infer D}` | `${infer D}${Blank}` ? BestTrim<D> : T;

type Result10 = BestTrim<'  Hello World  '>;
type Result20 = BestTrim<'      Hello World      '>;
type Result30 = BestTrim<'Hello       '>;
type Result40 = BestTrim<' '>;
type Result50 = BestTrim<`
Hello World

`>;

export { Trim };
