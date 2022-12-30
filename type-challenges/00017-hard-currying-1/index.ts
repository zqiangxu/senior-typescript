function curring(fun: (a: unknown, b: unknown) => unknown) {
  return function (a: unknown) {
    return function (b: unknown) {
      return fun(a, b);
    };
  };
}

type CurringResult<T> = T extends (...params: [infer FirstParam, ...infer RemainParams]) => infer Return
  ? // 如果已经是最后一个参数.那么直接返回函数返回值
    unknown extends FirstParam
    ? Return
    : // 否则进行下一次的递归
      (param: FirstParam) => CurringResult<(...params: RemainParams) => Return>
  : never;

declare function Currying<T>(method: T): CurringResult<T>;

const add = (a: number, b: number) => a + b;
const three = add(1, 2);

const curriedAdd = Currying(add);
const five = curriedAdd(2)(3);

const add3 = (a: number, b: number, c: number) => a + b + c;

const curriedAdd2 = Currying(add3);
const ten = curriedAdd2(2)(3)(5);

export { Currying, CurringResult };
