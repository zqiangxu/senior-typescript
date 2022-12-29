// 判断是否为一个 object
type IsObject<T> = T extends Record<PropertyKey, unknown> ? true : false;

type X = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 's';
        };
        readonly k: 'hello';
      };
    };
  };
};

type Expected = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 's';
        };
        k: 'hello';
      };
    };
  };
};

type DeepMutable<T> = IsObject<T> extends true
  ? {
      -readonly // 通过 -readonly 可以去掉 readonly 属性
      [Key in keyof T]: DeepMutable<T[Key]>;
    }
  : T;

type Todo = DeepMutable<X>; // should be same as `Expected`

export { DeepMutable };
