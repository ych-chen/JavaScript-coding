

class Math {
    // 定义一个构造函数，接收一个初始值
    constructor(value) {
      // 初始化一个属性value，用来存储计算结果
      this.value = value;
    }
    // 定义一个方法add，用来实现加法
    add(a) {
      // 计算value和a的和，并赋值给value
      this.value = this.value + a;
      // 返回当前对象
      return this;
    }
    // 定义一个方法minus，用来实现减法
    minus(b) {
      // 计算value和b的差，并赋值给value
      this.value = this.value - b;
      // 返回当前对象
      return this;
    }
    // 定义一个方法times，用来实现乘法
    times(c) {
      // 计算value和c的积，并赋值给value
      this.value = this.value * c;
      // 返回当前对象
      return this;
    }
  }
  