type Flip<T> = {
  // 作为Key值需要转字符串，需要判断类型是否为 string | boolean | number
  [key in keyof T as T[key] extends string | boolean | number ? `${T[key]}` : never]: key;
};

type R1 = Flip<{ a: 'x'; b: 'y'; c: 'z' }>; // {x: 'a', y: 'b', z: 'c'}
type R2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type R3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}

export { Flip };
