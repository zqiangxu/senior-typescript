type Blank = ' ';

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

export { Trim };
