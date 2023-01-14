// case1
type Case1Target = {};

type Case1Origin1 = {
  a: 'a';
};

type Case1Origin2 = {
  b: 'b';
};

type Case1Origin3 = {
  c: 'c';
};

type Case1Answer = {
  a: 'a';
  b: 'b';
  c: 'c';
};

// case2
type Case2Target = {
  a: [1, 2, 3];
};

type Case2Origin1 = {
  a: {
    a1: 'a1';
  };
};

type Case2Origin2 = {
  b: [2, 3, 3];
};

type Case2Answer = {
  a: {
    a1: 'a1';
  };
  b: [2, 3, 3];
};

// case3

type Case3Target = {
  a: 1;
  b: ['b'];
};

type Case3Origin1 = {
  a: 2;
  b: {
    b: 'b';
  };
  c: 'c1';
};

type Case3Origin2 = {
  a: 3;
  c: 'c2';
  d: true;
};

type Case3Answer = {
  a: 3;
  b: {
    b: 'b';
  };
  c: 'c2';
  d: true;
};

// case 4
type Case4Target = {
  a: 1;
  b: ['b'];
};
type Case4Answer = {
  a: 1;
  b: ['b'];
};

type Merge<T> = {
  [K in keyof T]: T[K];
};

// 先把所有的 Key 都找出来
type Keys<Sources extends any[] = []> = Sources extends [infer First, ...infer Rest]
  ? First extends object
    ? keyof First | Keys<Rest>
    : never
  : never;

type K1 = Keys<[Case1Origin1, Case1Origin2, Case1Origin3]>;
type K2 = Keys<[Case2Origin1, Case2Origin2]>;
type K3 = Keys<[Case3Origin1, Case3Origin2]>;

// 然后选择正确的 Key 的类型
type GetCorrectValue<Key extends PropertyKey, Sources extends any[] = []> = Sources extends [...infer Rest, infer Last]
  ? Key extends keyof Last
    ? Last[Key]
    : GetCorrectValue<Key, Rest>
  : never;

type Assign<T, Sources extends any[] = []> = {
  [Key in keyof T | Keys<Sources>]: GetCorrectValue<Key, [T, ...Sources]>;
};

type R1 = Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>;
type R2 = Assign<Case2Target, [Case2Origin1, Case2Origin2]>;
type R3 = Assign<Case3Target, [Case3Origin1, Case3Origin2]>;
type R4 = Assign<Case4Target, ['', 0]>;
type R5 = Assign<Case4Target, [number, string]>;

export { Assign };
