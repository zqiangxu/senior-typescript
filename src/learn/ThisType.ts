// ThisType 不返回任何转换过的类型，而是仅仅作为对象字面量上下文中 this 的标识。

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

// 官方文档示例
type ObjectDescriptor<D, M> = {
  data?: D;
  // 关键点：声明 methods 中 this 的类型
  methods?: M & ThisType<D & M>;
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
      // x 有类型提示
      this.x += dx;
      // y 也有类型提示
      this.y += dy;
    },
  },
});
