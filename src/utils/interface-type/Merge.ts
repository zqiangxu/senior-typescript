type Merge<T> = {
  [key in keyof T]: T[key];
};

type User = {
  username: string;
};

type Person = {
  name: string;
};

type R1 = Merge<{ a: 1 } & { b: 2 }>;
type R2 = Merge<User & Person>; // 如果不 Merge 显示的是 User & Person. 鼠标移动上去无法看到真正的属性

export { Merge };
