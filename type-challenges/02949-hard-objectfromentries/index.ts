// 在逆变的位置会产生交叉类型
type Union2Intersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type Merge<T> = {
  [K in keyof T]: T[K];
};

type ObjectFromEntries<U> = Merge<
  Union2Intersection<
    // 先转成 Intersection
    U extends any ? (U extends [infer Key extends PropertyKey, infer Types] ? { [K in Key]: Types } : never) : never
  >
>;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type result = ObjectFromEntries<ModelEntries>;

export { ObjectFromEntries };
