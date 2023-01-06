const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'] as const;

type MergeProperty<T extends Record<PropertyKey, any>> = { [key in keyof T]: T[key] };

type Enum<T extends readonly string[], N extends boolean = false, Arr extends number[] = []> = MergeProperty<
  T extends readonly [
    // 限制下 First 和 Rest 的类型
    infer First extends string,
    ...infer Rest extends string[]
  ]
    ? // 动态 Key 可以这样处理
      { readonly [Key in Capitalize<First>]: N extends true ? Arr['length'] : First } & Enum<Rest, N, [...Arr, 1]>
    : {}
>;

type R1 = Enum<[]>;
type R2 = Enum<typeof OperatingSystem>;
type R3 = Enum<typeof OperatingSystem, true>;
type R4 = Enum<typeof Command, true>;
type R5 = Enum<typeof Command>;

export { Enum };
