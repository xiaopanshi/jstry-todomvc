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
// var F=function(){};
// 		F.prototype.name = "nicholas";
// 		F.prototype.age = "29";
//          Object.prototype.a=function(){};
//          Function.prototype .b=function(){};
//          var f=new F();
//          f.name = "miaopeng";
// //          
// var obj = {};

// var foo = {n:1};
// (function(foo){            //形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
//     var foo;               //优先级低于形参，无效。
//     console.log(foo.n);    //输出1
//     foo.n = 3;             //形参与实参foo指向的内存空间里的n的值被改为3
//     foo = {n:2};           //形参foo指向了新的内存空间，里面n的值为2.
//     console.log(foo.n);    //输出新的内存空间的n的值
// })(foo);
// console.log(foo.n); 

// function A() {
//     // this.do=function() {return 'foo'};
// }
// A.prototype=function () {
// 	// constructor: A
//     this.do=function() {return 'bar'};
// };
// // A.prototype = {n:3333}
// var x=new A();
// x.a = {n:3};
// console.log(x.do)
// 

// var A = {n:4399};

// var B = function(){this.n = 9999;}
// var C = function(){var n = 88888;}
//              
// B.prototype = A;
// C.prototype = A;

// var b = new B();
// var c = new C();
//  
// console.log(b.n);
// console.log(c.n);


//远景编程题
// var foldersize = function(files, clusterSize, folderCount) {
// 	var clusterCounter = [];
// 	var residuNum = [];
// 	var residu = new Array(folderCount), i=residu.length;
// 	while(i--){residu[i] = 0;}
// 	for(var x in files){
// 		var arr = files[x].split(" ");
// 		clusterCounter = Math.ceil(arr[1] / clusterSize);
// 		residuNum[arr[0]] = clusterCounter * clusterSize - arr[1];
// 		residu[arr[0]] = residuNum[arr[0]] + residu[arr[0]];

// 	}
// 	return residu;
// } 
// var files = ["0 55", "0 47", "1 22", "1 21"];
// var clusterSize = 50;
// var folderCount = 3;
// console.log(foldersize(files, clusterSize, folderCount))


// function MagicCandy(whichOne) {
// 	var lastOne; 
// 	var k;
// 	var residu = new Array(whichOne), j=whichOne;
// 	var squre = [];   //删除数组编号
//  	while(j--){residu[j] = j+1;}
// 	while(1){
// 		if(!(residu.length == 1)){
// 			k = Math.floor(Math.sqrt(residu.length)); //平方下标
// 			for (var i = 0; i < k; i++) {
// 				squre[i] = (i+1)*(i+1)-(i+1); 
// 				residu.splice(squre[i],1);  //中间数组
// 			}
// 		}else{
// 			lastOne = residu[0];
// 			break;
// 		}
// 	}
// 	return lastOne;
// }
// var whichOne = 20;
// console.log(MagicCandy(whichOne))