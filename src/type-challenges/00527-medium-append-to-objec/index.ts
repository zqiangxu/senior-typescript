type AppendToObject<T, U extends string, V> = {
  // 新增一个 key 值
  [key in keyof T | U]: key extends keyof T ? T[key] : V;
};

type Test = { id: '1'; name: 'alawnxu' };
type Result = AppendToObject<Test, 'value', 4>;

export { AppendToObject };
