// 自我组合
// T = U, T extends string 遍历自己
type SelfCombination<U extends string, T = U> = T extends string
  ? // ${T} 是单个的
    // ${T} ${SelfCombination<Exclude<U, T>>} 是组合自身和排除掉自己的所有组合
    // 例如 SelfCombination<'foo' | 'baz'>
    // 'foo' | `foo baz`
    // 'baz' | `baz foo`

    // SelfCombination<'foo' | 'baz' | 'bye'>
    // 对于 foo 就只有下面这种情况
    // 'foo' | `foo ${SelfCombination<'baz' | 'bye'>}`
    // =>
    // 进行下次遍历为:
    // A: `foo baz` | `foo baz ${SelfCombination<'bye'>}` => 'foo baz' | 'foo baz bye'
    // B: `foo bye` | `foo bye ${SelfCombination<'baz'>}` => 'foo bye' | 'foo bye baz'
    // 其与几个组合一次类推
    `${T}` | `${T} ${SelfCombination<Exclude<U, T>>}`
  : '';

type SC1 = SelfCombination<'foo' | 'baz' | 'bye'>;
type SC2 = SelfCombination<'foo'>;
type SC3 = SelfCombination<'foo' | 'baz'>;
type Combination<T extends readonly any[]> = SelfCombination<T[number]>;

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>;

export { Combination };
