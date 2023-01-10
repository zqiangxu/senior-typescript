type CamelizeString<T extends PropertyKey> = T extends `${infer First}_${infer Last}`
  ? `${First}${CamelizeString<Capitalize<Last>>}`
  : T;

type Camelize<T> = T extends any[]
  ? // 如果是数组，直接遍历
    { [K in keyof T]: Camelize<T[K]> }
  : T extends Record<PropertyKey, any>
  ? {
      // 如果是对象，需要继续深度遍历
      [K in keyof T as CamelizeString<K>]: Camelize<T[K]>;
    }
  : T;

type T1 = Camelize<{
  some_prop_prop2__a: string;
  prop: { another_prop: string };
  array: [{ snake_case: string; snake_b: number }];
}>;

export { Camelize };
