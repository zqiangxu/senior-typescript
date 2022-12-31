// 这里可以把 string 转成 union ，写法会更优雅一点
type CapitalLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

type CapitalizeWords<T extends string, FirstCharFlag = true> = T extends `${infer FirstChar}${infer Sub}`
  ? // 如果第一个字符是字母
    Uppercase<FirstChar> extends CapitalLetter
    ? // 判断是否 FirstChar
      FirstCharFlag extends true
      ? // 如果是 FirstChar . 则转大写. 并更新 FirstCharFlag
        `${Uppercase<FirstChar>}${CapitalizeWords<Sub, false>}`
      : // 如果不是首字母, 直接处理后续的子串
        `${FirstChar}${CapitalizeWords<Sub, FirstCharFlag>}`
    : // 如果不是字符. 则更新 FirstCharFlag 为 true
      `${FirstChar}${CapitalizeWords<Sub, true>}`
  : '';

type capitalized = CapitalizeWords<'hello world, my friends'>; // expected to be 'Hello World, My Friends'
type capitalized2 = CapitalizeWords<'foobar'>; // Foobar
type capitalized3 = CapitalizeWords<'FOOBAR'>; // FOOBAR
type capitalized4 = CapitalizeWords<'foo bar hello world'>; // Foo Bar Hello World
type capitalized5 = CapitalizeWords<'foo bar.hello,world'>; // Foo Bar.Hello,World
type capitalized6 = CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp'>; // Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp
type capitalized7 = CapitalizeWords<'🤣12Abc12abc'>;
type capitalized8 = CapitalizeWords<'Abc12Abc(jj)🤣12Abc12abc'>;
type capitalized9 = CapitalizeWords<'oo|pp🤣qq'>;
type capitalized10 = CapitalizeWords<'ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>;
type capitalized11 = CapitalizeWords<'!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>;
