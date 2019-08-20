// function Animate(name){
//   this.name = name;
//   this.colors=['red','green','blue','pink']
// }
// Animate.prototype.showName = function (){
//   console.log(this.name);
// }
// function Tiger(name,type){
//   // 这里的this指向Tiger的实例对象
//   Animate.call(this,name);
//   this.type = type
// }
// var tiger1 = new Tiger('小葱','东北虎');
// // console.dir(tiger1);
// console.log(tiger1);
// tiger1.colors.push('black');
// console.log(tiger1.name);
// console.log(tiger1.colors);
// var tiger2 = new Tiger('大葱','华南虎');
// console.log(tiger2.name);
// console.log(tiger2.colors);
// function Person(name,age){
//   this.name = name
//   this.age = age
// }
// Person.prototype.showName = function (){
//   console.log(this.name);
// }
// Person.prototype.showAge = function (){
//   console.log(this.age);
// }

// function Stu(name,age,num,score){
//   Person.call(this,name,age);
//   this.num = num;
//   this.score = score;
// }
// Stu.prototype = new Person();// 可以不需要传参
// Stu.prototype.showScore = function (){
//   console.log(this.score);
// }
// Stu.prototype.showS = function (){
//   console.log(this.num);
// }
// var tom = new Stu('tom',20,123,100);
// console.log(tom.name);
// console.log(tom.age);
// console.log(tom.num);
// console.log(tom.score);
// tom.showName();
// tom.showAge()
// tom.showScore()
// tom.showS()

// ###########################投票器###################################
// 获取数据
// var btns = document.querySelectorAll('input')
// for(var i=0;i<btns.length;i++){
//   btns[i].onclick = (function (i) {
//     // 此时这里在的i的值就相当于是一个局部变量  活动对象
//     // obj.i =0  obj.fn = function(){}  obj.num = 0
//     var num = 0;
//     return function(){
//       btns[i].value = ++num
//     }
//   })(i)
// }
// ########################投票器##################################
// 获取数据
// var btns = document.querySelectorAll('input')
// // 使用循环
// for (var i = 0; i < btns.length; i++) {
// // 闭包
// btns[i].onclick = (function(i){
//   // 数字初始化
//   var num = 0
//   return function(){
//     btns[i].value = ++num
//   }
// })(i)
// }
// ########################投票器##################################
// // 获取数据
// var bt = document.querySelectorAll('input')
// // 使用for循环
// for (var i = 0; i < bt.length; i++) {
//   // 使用闭包:点击事件
//   bt[i].onclick = (function (i) {
//     // 因为如果不初始化数据，每个按钮就会不断继承
//     var num = 0 
//     return function () {
//       // 当被点击的时候不断添加
//       bt[i].value = ++num
//     }
//   })(i) // 需要传入形参与实参
// }
// // for循环只是为了查找当前按钮事件的事件源。
// // 里面的num才是改变value的值（变量）。
// // ########################分割#################################
// 求阶乘
// 用递归
// var n = +prompt('biu jh')
// function gui(n) {
//   // 1*2*3....
//   // n*（n-1）
//   // 当n=1的时候，n-1=0，此等式不成立,需要立即返回1
//   if (n == 1) {
//     return 1
//   }
//   return n*gui(n-1)
// }
// var num = gui(n)
// alert(num)
// ######################class的继承#########################
// 创建
class Person {
    constructor (name,age,Num) {
        name
        age
        Num
    }
    hollow(){
        console.log('我叫：'+name+',今年：'+age+'岁，我喜欢的数字：'+Num)
    }
}
// 继承
class my extends Person {
    constructor(name,age,Num){
        super(name,age,Num)
        haha
    }
} 
 