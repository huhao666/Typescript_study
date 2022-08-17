class  Dog {
    name: string;
    age: number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        // console.log(this);
        this.name = name,
        this.age = age
    }

    bark(name:string){
        console.log(this.name);
        console.log(name + '汪汪汪！！');
    }
}



const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);
// const dog3 = new Dog();
// const dog4 = new Dog();

console.log(dog);
console.log(dog2);
// console.log(dog3);
// console.log(dog4);

dog.bark("111");
dog.bark("222");

