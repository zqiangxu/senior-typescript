type NumberRange<Start extends number, End extends number, Result extends number[] = [], Flag extends boolean = false> =
  // 如果长度等于 End , 则表示已经结束. 返回结果
  Result['length'] extends End
    ? [...Result, Result['length']][number]
    : // 否则判断是否等于 Start. 如果为 Start. 更新 Flag. 并把当前值插入到 Result 中
    Result['length'] extends Start
    ? NumberRange<Start, End, [...Result, Result['length']], true>
    : // 如果不等于 Start. 则判断 Flag 是否为 true. 为 true 则更新 Result
    Flag extends true
    ? NumberRange<Start, End, [...Result, Result['length']], Flag>
    : // 把 never 丢进去占用一个元素. 最终结果再移除掉
      NumberRange<Start, End, [...Result, never], Flag>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type result2 = NumberRange<1, 9>;
type result3 = NumberRange<0, 1>;

export { NumberRange };
