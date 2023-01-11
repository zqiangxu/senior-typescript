type Split<T extends string, C extends string> = T extends ''
  ? // 如果 T 是空, 而且 C 是空. 则返回 []
    C extends ''
    ? []
    : // 只有 T 是空，返回 ['']
      ['']
  : // 如果都不为空. 判断是否为 string
  T extends `${infer First}${C}${infer Rest}`
  ? [First, ...Split<Rest, C>]
  : // 还有一种情况
  string extends T
  ? string[]
  : [T];

type result = Split<'Hi! How are you?', ' '>; // should be ['Hi!', 'How', 'are', 'you?']
type result2 = Split<'Hi! How are you?', 'z'>; // ['Hi! How are you?']
type result3 = Split<'Hi! How are you?', ''>; // ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
type result4 = Split<'', ''>; // []
type result5 = Split<'', 'z'>; // ['']
type result6 = Split<string, 'whatever'>;
export { Split };
