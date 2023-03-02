(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
        //[propName: string]: any,
        //开发的时候，不确定后端返回的数据是否都是我们定义的类型，所以在定义变量时，除了我们需要的键值，需要采用[propName: string]: any作为不确定键值的判断
    };


    /* 
        接口用来定义一个类结构, 用来定义一个类中应该包含哪些属性和方法,同时接口也可以当成类型声明去使用
    */
    interface myInterface{
        name: string;
        age: number;
    }
    //可以重复申明，添加其他属性   =  一个myInterface接口，现在有三个属性name，age，gender
    interface myInterface{
        gender: string;
    }

    const obj: myInterface = {
        name: 'sss',
        age: 111,
        gender: '男'
    };


    /*
        接口可以在定义类的时候去限制类的结构
        接口中所有的属性都不能有实际的值
        接口只定义对象的结构，而不考虑实际值
        在接口中所有的方法都是抽象类
    
    */
    interface myInter{
        name: string;
        sayHello(): void;
    }

    /* 
        定义类时，可以使类去实现一个接口，实现接口就是使类满足接口的要求
    */
    class MyClass implements myInter{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(){
            console.log("大家好~~~");
        }
    }


})();