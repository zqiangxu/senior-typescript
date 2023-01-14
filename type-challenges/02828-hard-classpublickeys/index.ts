type ClassPublicKeys<T, k = keyof T> = k extends keyof T ? k : never;

class A {
  public str: string;
  protected num: number;
  private bool: boolean;

  constructor() {
    this.str = 'alawnxu';
    this.num = 18;
    this.bool = false;
  }

  getNum() {
    return Math.random();
  }
}

type publicKeys = ClassPublicKeys<A>; // 'str' | 'getNum'

export { ClassPublicKeys };
