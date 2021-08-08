//DEMO-1
//即时调用函数表达式（IIFE）
/*
    自己打印出自己被调用的次数，而且次数不会被篡改；
    变量count被安全的隐藏在IIFE中
 */
const fx = (function (){
    let count = 0;
    //此处一定是返回一个函数，如此，f才可以是个函数
    return function (){
        console.log(`I have been called ${++count} time(s).`);
    }
})();
//被调用共3次
fx();
fx();
fx();

//DEMO-2
//函数提升
//类似于var声明的变量，函数声明也会被提升至他们作用域的顶部
f();    //打印"f"
function f(){
    console.log('f');
}
//赋给变量的函数表达式不会被提升，他们的作用域规则跟变量的一样的
// ft();   //执行出错，ft不是一个函数
// let  ft = function (){
//     console.log('F');
// }

//DEMO-2
//maps
const u1 = {name:'Cynthia'};
const u2 = {name:'Jackson'};
const u3 = {name:'Olive'};
const u4 = {name:'James'};
//创建一个map对象
//不认识Map()导致转不成es5格式，尚未解决
const userRoles = new Map();
//使用set（）方法把user赋给role
userRoles.set(u1,'User');
userRoles.set(u2,'User');
userRoles.set(u3,'Admin');
//或者直接创建
//const userRoles = new Map([[u1,User1],[u2,User2],[u3,'Admin3']]);

//链式调用set（）方法
// userRoles.set(u1,'User')
//     .set(u2,'User')
//     .set(u3,'Admin');
console.log(userRoles.get(u2)); //获取u2对应的值
console.log(userRoles.size);    //返回map中元素的个数
//entries()可以以数组的方式，获取键值对
//用for...of循环来迭代
for(let u of userRoles.keys())
    console.log(u.name);
for (let r of userRoles.values())
    console.log(r);
for (let ur of userRoles.entries())
    console.log(`${ur[0].name}:${ur[1]}`);
//这里通过解构让迭代更自然
for (let [u,r] of userRoles.entries())
    console.log(`${u.name}:${r}`);

//DEMO-3
//Weak maps,用它来存储对象实例中的私有key
//这个对象里边包含了两个方法
const SecretHolder = (function (){
    const secrets = new WeakMap();
    return class {
        setSecret(secret){
            secrets.set(this,secret);
        }
        getSecret(secret){
            return secrets.get(this);
        }
    }
})();
const a = new SecretHolder();
const b = new SecretHolder();
a.setSecret('secret A');
b.setSecret('secret B');
console.log(a.getSecret());
console.log(b.getSecret());

//DEMo-4
//sets : 不允许重复数据的集合
const roles = new Set();
//想添加一个user role，可以用add（）方法
roles.add('User');
//如果想把这个user变成管理员，可以继续调用add()方法
roles.add('Admin');
//set 也有 size 属性
console.log(roles.size);
//set 的优美之处在于，不需要在添加元素的时候检查set中是否已经有这个元素了。
//如果添加早已存在于set中的值，设么都不会发生
roles.add('User');
console.log(roles.size);
//删除role，用delete()方法，如果返回true则表示这个role咋set中，否则返回false
console.log(roles.delete('Admin'));
console.log(roles.delete('Admin'));
