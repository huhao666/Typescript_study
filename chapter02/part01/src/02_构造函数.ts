class  Dog {
    name: string;
    age: number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name: string, age: number) {
       // 在实例方法中，this就表示当前的实例，const dog2 = new Dog('小白', 2);this指向dog2
        //调用new Dog的时候，就会调用constructor这个构造函数
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name,
        this.age = age
    }

    bark(act:string){
        console.log(this.name);
        console.log(act + '汪汪汪叫！！');
    }
}



const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

console.log(dog);
console.log(dog2);

dog.bark("开心地");
dog.bark("快乐地");

