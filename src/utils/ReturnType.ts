type ComplexObject = {
    a: [12, 'foo'];
    bar: 'hello';
    prev(): number;
  };
  
  const fn = (v: boolean) => (v ? 1 : 2);
  const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
  
  /**
   * 获取方法的返回类型
   */
  type ReturnType<T extends Function> = T extends (...params: any[]) => infer D ? D : never;
  
  type Result1 = ReturnType<() => string>;
  type Result2 = ReturnType<() => 123>;
  type Result3 = ReturnType<() => ComplexObject>;
  type Result4 = ReturnType<() => Promise<boolean>>;
  type Result5 = ReturnType<() => () => 'foo'>;
  type Result6 = ReturnType<typeof fn>;
  type Result7 = ReturnType<typeof fn1>;
  
  export { ReturnType };
  