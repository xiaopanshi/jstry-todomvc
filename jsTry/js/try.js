/**
 * Created by panpan on 2017/7/1.
 */

// var stringValue = "leoafdgj aosfeijfea fdkfde";
// var position = new Array();
// var pos = stringValue.indexOf("e");
// while (pos > -1){
//     position.push(pos);
//     pos = stringValue.indexOf("e", pos+1);
// }

//组合使用构造函数模式和原型模式  --  重点
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.friends = ["Shelby", "court"];
// }
//
// Person.prototype = {
//     constructor :  Person,
//     sayName : function () {
//         alert(this.name);
//     }
// }
//
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Greg", 27, "doctor");
//
// person1.friends.push("van");
// alert(person1.friends);  //"Shelby,count,Van"
// alert(person2.friends);  //"Shelby,Count"
// alert(person1.friends === person2.friends);  //false
// alert(person1.sayName === person2.sayName)    //true

// 寄生构造函数模式   特殊数组要重新构造
// function Person(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         alert(this.name);
//     };
//     return o;
// }
//
// var friend = new Person("Nicholas", 29, "Software Engineer");
// friend.sayName();   //"Nicholas"

// 稳妥构造函数模式
// function Person(name, age, job) {
//     //创建要返回的对象
//     var o = new Object();
//
//     //可以在这里定义私有变量和函数
//
//     //添加方法
//     o.sayName = function () {
//         alert(name);
//     };
//
//     //返回对象
//     return o;
// }
//
// var friend = Person("Nicholas", 29, "Software Engineer");
// friend.sayName();  //"Nicholas"


//继承
// function SuperType() {
//     this.property = true;
// }
//
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
//
// function SubType() {
//     this.subproperty = false;
// }
//
// //继承了SuperType
// SubType.prototype = new SuperType();
//
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };
//
// var instance = new SubType();
// alert(instance.getSuperValue());    //true

// function getQueryStringArgs() {
// 	//取得查询字符串并去掉开头的问号
// 	var qs = location11.searched.length > 0 ? location11.searched.substring(1) : "";
// 	//保存数据
// 	args = {};
// 	items = qs.length ? qs.split("&") : "";
// 	item = null;
// 	name = null;
// 	value = null;

// 	//for循环使用
// 	i = 0;
// 	len = items.length;
// 	//逐个将每一项添加到args对象中
// 	for (i=0; i<len;i++){
// 		item = items[i].split("=");
// 		name = decodeURIComponent(item[0]);
// 		value = decodeURIComponent(item[1]);

// 		if (name.length) {
// 			args[name] = value;
// 		}
// 	}
// 	return args;
// }

// var location11 = {};
// location11.searched = "?q=javascript&num=10";
// var args = getQueryStringArgs();
// alert(args["q"]);  //"javascript";
// alert(args["num"]); //"10"
// 

// alert(Number({}))
// alert([{}]==true)
// 
var F=function(){};
		F.prototype.name = "nicholas";
		F.prototype.age = "29";
         Object.prototype.a=function(){};
         Function.prototype .b=function(){};
         var f=new F();
         f.name = "miaopeng";
//          
var obj = {};