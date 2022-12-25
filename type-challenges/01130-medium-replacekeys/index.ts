// 遍历T
type ReplaceKeys<T, Keys, U, S = T> = S extends T
  ? {
      // 遍历属性当前类型的属性列表

      // 如果在Keys中
      [key in keyof S]: key extends Keys
        ? // 如果当前 U 的属性中存在 key. 则直接取 U 中的类型
          key extends keyof U
          ? U[key]
          : // 不在则直接取 never. 哪怕在 T 中
            never
        : // 如果不存在，这个时候就取 S 中的属性值
        key extends keyof S
        ? S[key]
        : never;
    }
  : S;

type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

export { ReplaceKeys };
