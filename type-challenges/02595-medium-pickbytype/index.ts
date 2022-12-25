// 获取到所有 U 类型的 属性值
type PickProperty<T, U, K = keyof T> = K extends keyof T ? (T[K] extends U ? K : never) : never;

// 遍历需要的属性即可
type PickByType<T, U, K = keyof T> = {
  [key in K extends keyof T ? (T[K] extends U ? K : never) : never]: T[key] extends U ? U : never;
};

type BestPickByType<T, U> = {
  [key in PickProperty<T, U>]: T[key] extends U ? U : never;
};

type SeniorPickByType<T, U> = {
  // 获取到 key 之后，可以继续 as xxx 来进行额外的计算
  [key in keyof T as T[key] extends U ? key : never]: T[key];
};

// => isReadonly | isEnable
type Props = PickProperty<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>;

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>;

type OnlyBoolean2 = BestPickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>;

export { PickByType, BestPickByType, SeniorPickByType };
