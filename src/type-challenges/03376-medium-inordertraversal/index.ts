interface Tree {
  val: number;
  left: Tree | null;
  right: Tree | null;
}

type IsNotNull<T> = [T] extends [null] ? false : true;

type ResultA = IsNotNull<null>;
type ResultB = IsNotNull<1>;
type ResultC = IsNotNull<{ a: null }>;

type InorderTraversal<T extends Tree> = IsNotNull<T['left']> extends true
  ? // 中序，左节点在前面
    [...InorderTraversal<T['left']>, T['val']]
  : IsNotNull<T['right']> extends true
  ? // 中序，右节点在后面
    [T['val'], ...InorderTraversal<T['right']>]
  : [T['val']];

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

type A = InorderTraversal<typeof tree1>;

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const;
type B = InorderTraversal<typeof tree2>;

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const;
type C = InorderTraversal<typeof tree3>;

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const;
type D = InorderTraversal<typeof tree4>;

export { InorderTraversal };
