type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        }
      ];
    };
  };
};

// error
// readonly [key in keyof T]: keyof T[key] extends 0 ? T[key] : DeepReadonly<T[key]>;

type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends () => any ? T[key] : T[key] extends {} ? DeepReadonly<T[key]> : T[key];
};

type Result = DeepReadonly<X>;

// https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L127
type Primitive = string | number | boolean | bigint | symbol | undefined | null;

type Builtin = Primitive | Function | Date | Error | RegExp;

// 有点意思. reactive deep readonly
type DeepReadonly2<T> = T extends Builtin
  ? T
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends Set<infer U>
  ? ReadonlySet<DeepReadonly<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepReadonly<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepReadonly<U>>
  : T extends Promise<infer U>
  ? Promise<DeepReadonly<U>>
  : T extends {}
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : Readonly<T>;

export { DeepReadonly, DeepReadonly2 };
