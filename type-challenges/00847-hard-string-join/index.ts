type JoinChars<Chars extends string[] = [], JoinChar extends string = ''> =
  // 如果只剩最后一个.不再执行下次递归.防止多加多一个后缀
  Chars['length'] extends 1
    ? Chars[0]
    : // 否则递归
    Chars extends [infer First extends string, ...infer Rest extends string[]]
    ? `${First}${JoinChar}${JoinChars<Rest, JoinChar>}`
    : '';

declare function join<JoinChar extends string>(
  joinChar?: JoinChar
): // 返回值的泛型不能放到方法上面.注意这个即可
<Chars extends string[]>(...params: Chars) => JoinChars<Chars, JoinChar>;

const hyphenOutput2 = join('')('a', 'b', 'c');
const oneCharOutput = join('-')('a');
const hyphenOutput = join('-')('a', 'b', 'c');
const hashOutput = join('#')('a', 'b', 'c');
const twoCharOutput = join('-')('a', 'b');
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
const noCharsOutput = join('-')();
