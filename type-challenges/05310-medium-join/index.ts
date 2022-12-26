type Join<T extends readonly any[], JoinChar extends string | number | boolean> = T extends [
  infer First extends string | boolean | number,
  ...infer Rest
]
  ? // 判断下是否为空数组. 如果不判断. 会拼接多一个 JoinChar 在最后面
    Rest extends []
    ? `${First}`
    : // 拼接并递归后面的元素
      `${First}${JoinChar}${Join<Rest, JoinChar>}`
  : '';

type Res = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
type Res1 = Join<['Hello', 'World'], ' '>; // expected to be 'Hello World'
type Res2 = Join<['2', '2', '2'], 1>; // expected to be '21212'
type Res3 = Join<['o'], 'u'>; // expected to be 'o'
