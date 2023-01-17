/**
 * @see 官网文档 https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype
 * ThisType 不返回任何转换过的类型，而是仅仅作为对象字面量上下文中 this 的标识。
 */

let Animal = {
  hello() {
    // @ts-expect-error
    console.error(this.name);
  },
};

let BestAnimal: ThisType<{ name: string }> = {
  hello() {
    // correct
    console.error(this.name);
  },
};

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

export {};
