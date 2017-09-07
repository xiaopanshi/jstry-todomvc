//copyright by hwj in 2017/8/22



//************************************字符串（每个汉字2字节，其它每个字符1字节）************************************
//对字符串的操作都不会影响原字符串的值。
var str="hello world";
console.log(str.length);
var str2=str.concat("前端");
console.log(str2);   //原字符串不变,通常情况下字符串的拼接用“+”
console.log(str+"前端");

var result1=str.charAt(1); //"e"
var result2=str.charCodeAt(1);  //101
var result3=String.fromCharCode(101); //"e"

var subs1=str.slice(2,5);    //"llo"  不会改变原数组
var subs2=str.substring(2,5)  //第二个参数表示最后一个字符后面的位置  "llo"
var subs3=str.substr(2,5)  //第二个参数表示返回字符串的个数  "llo w"

var index1=str.indexOf("l"); //2 数组和字符串都可以使用，有就返回字符串或者数组位置，没有就返回1（NaN）
var index2=str.indexOf("c");  //-1
var index3=str.lastIndexOf("l");//9
var index4=str.indexOf("l",5); //9
var index5=str.lastIndexOf("l",5); //3

var str3="  hELlo WorlD   ";
var str4=str3.trim();

var uppers=str.toUpperCase();
var lowers=str.toLowerCase();

var text="cat,bat,mat,fat,eat,bat";
var pattern1=/.at/; //模式匹配
var pattern2=/.at/g;
var matchs1=text.match(pattern1); //[cat]
var matchs2=text.match(pattern2); //[cat, bat, mat, fat, eat, bat]
console.log(typeof(matchs2))  //object
var search1=text.search(/bat/);//返回第一次出现位置的索引值 4
var search2=text.search(/bat/g); //4
var result=text.replace(/at/g,"one"); //"cone,bone,mone,fone,eone,bone"
var arr=text.split(","); //["cat", "bat", "mat", "fat", "eat", "bat"]

var str="yellow";
console.log(str.localeCompare("black"));  //1
console.log(str.localeCompare("yellow"));  //0
console.log(str.localeCompare("zoo"));   //-1


//************************************数值（4字节，与长度无关）************************************
var num=20;
console.log(num.toString()); //"20"
console.log(num.toString(2));  //"10100"  2进制表示

console.log(num.toFixed(2));  //"20.00"  两位小数，返回的是字符串
console.log(10.005.toFixed(2));  //"10.01"  接近指定的最大小数位的值会舍入
console.log(10.0005.toFixed(2));  //"10.00"

var num=0.0001;
console.log(num.toExponential(1));  //1.0e-4
console.log(num.toExponential(2));   //1.00e-4  参数表示输出结果的小数位数

var numObjet= new Number(10);  //Number包装类型，表示Number对象
console.log(typeof num);  //number
console.log(typeof numObjet)  //object
console.log(num instanceof Number);  //false
console.log(numObjet instanceof Number);  //true

//************************************Boolean类型******************************************************
//Boolean类型是与布尔值对应的引用类型。
//布尔表达式中得所有对象(即所有的object)都会被转换为true,只有5种情况才会是false
//布尔型的false,  字符串型的"",   数值型的0和NaN,   undefined
//
var falseValue=false;  //基本类型
var falseObject=new Boolean(false);// 创建Boolean对象
console.log(typeof falseValue);  //boolean
console.log(typeof falseObject);  //object
console.log(typeof undefined)	//undefined
console.log(typeof null)	//object
console.log(typeof str)		//string
var result1=falseValue&&true; //false
var result2=falseObject&&true; //true   所有的object类型都会被转换为true

//************************************3中类型的转换****************************************************
// 任意类型to string: 2种  String（x）---隐式转换的原型   num.toString()---一切类型都有
// 数组转字符串：  arr.join("")  或arr.toString()
// 字符串转数组： str.split(",") 
// 任意类型to number: 2种  Number(x)----隐式转换的原型    parseInt(str)---仅适合于字符串  parseFloat(str)
parseInt("$400");  //NaN
parseInt("12px");  //12
// 任何类型 to boolean: 1种  Boolean（x）;  5个转为false,其余都是true



//************************************************数组**************************************************
// 数组的拼接和截取：原对象不变，返回新对象
var colors=["red","yellow","blue","green","purple"];
console.log(colors.length);  //5
var colors2=colors.concat("black",["brown","pink"]);  //["red","yellow","blue","green","purple","black","brown","pink"]
var colors3=colors.slice(2);  //["blue","green","purple"]
var colors4=colors.slice(2,4);   //["blue","green"]
// 删除，插入和替换  原对象改变
var colors5=colors.splice(0,3);    //删除的起始位置，删除的总项数   //["red","yellow","blue"]
var colors6=colors.splice(2,0,"aaa");    //插入的起始位置，0（删除的总项数），要插入的项
var colors7=colors.splice(2,1,"bbb","ccc")   //将第二项替换为bbb,ccc



//************************************************NaN**************************************************
//NaN和任何类型数据做运算，永远返回NaN；  NaN与任何值都不同，包括NaN自身。
console.log(typeof NaN);  //number
//isNaN()在收受一个值的时候，会尝试将其转换为数值。任何不能被转换为数值的值会导致这个函数返回true.
console.log(isNaN(isNaN));  //true
console.log(isNaN(10));   //false
console.log(isNaN("10"));   //false   "10"可以转换为数值10
console.log(isNaN("blue"));   //true
console.log(isNaN(true));   //false    可以转换为数值1



//************************************************Function类型******************************************
//1111111函数其实是对象，函数名是指向函数对象的变量名。
//     每个函数都是Function类型的实例，有与其他引用类型一样的属性和方法
//     函数的创建方式有3种
function sum(a, b){
	return a+b;
}
console.log(sum(10,20)); //30

var anotherSum=sum;  //将地址值复制，即指向同一个函数
console.log(anotherSum(10,10));  //20

sum=null;
console.log(anotherSum(10,10));  //20
// console.log(sum(10,20));   // TypeError

//222222222*************没有重载 arguments*********
//JS中函数的参数和其他语言中函数的参数有所不同，它不介意传进几个参数，也不在乎参数的类型。-------所以函数没有重载
//即便定义的函数只有两个参数，在调用这个函数的时候也未必一定要传入两个参数------即命名的参数只是提供便利，但不是必需的）
//***之所以这样的原因是JS中函数的参数在内部是用一个数组接受的
//***arguments对象，函数对象内，自动创建的专门接收所有参数的类数组对象。----用arguments对象可以模拟重载效果
function cal(){
	if(arguments.length==1){
		alert(arguments[0]*arguments[0]);
	}else if(arguments.length==2){
		alert(arguments[0]+arguments[1]);
	}
}
cal(10);  //100
cal(10,10);  //20

// arguments[0]表示第一个参数，它的值永远与对应命名参数的值保持同步
function doAdd(num1,num2){
	arguments[1]=10;
	alert(arguments[0]+num2);
}
doAdd (20,30);  //30  修改arguments[1]的值相当于修改了num2的值。但是他们繁荣内存空间是独立的，只是值会同步

// arguments有一个callee属性，该属性是一个指针，指向拥有这个arguments对象的函数（多用于递归）
function factorial(num){
	if(num<=1){
		return 1;
	}else{
		return num*factorial(num-1);
	}
}
//上面计算阶乘的函数中，如果该函数有名字，且名字不会变的情况下是不会有错的。但是它的执行与函数名紧紧的耦合在一起了。
//为了消除这种紧密耦合的现象，可以使用arguments.callee
function factorial(num){
	if(num<=1){
		return 1;
	}else{
		return num*arguments.callee(num-1)
	}
}
//33333333333***********函数的属性和方法******
//每个函数都包含两个属性：length,prototype
//length表示函数希望接收的命名参数的个数；对于引用类型来讲，prototype是保存他们所有实例方法的真正所在，
//只不过通过各自对象的实例访问而已。
//每个函数都有两个非继承的方法apply()和call()------扩充函数赖以运行的作用域
var color="red";
var o={color:"blue"};
function sayColor(){
	console.log(this.color);
}
sayColor();  //red  函数在全局下定义，在全局作用域调用它的时候，this指向o
sayColor.call(o);  //blue 此时函数内的this指向o

//bind()方法，会创建一个函数的实例，this值会被绑定到传给bind()函数的值。
var sayColor2=sayColor.bind(o);
sayColor2();   //blue


//******************************************分割线***********************************************


//关联数组  (可以自定义数组下标名称，它的length值失效)
//*******************************去除数组中重复的元素  ************************************
// function deleteReapeat(arr){
// 	var hash=[];
// 	var arr2=[];
// 	for(var i=0;i<arr.length;i++){
// 		if(!hash[arr[i]]){
// 			hash[arr[i]]=1;
// 			arr2.push(arr[i]);
// 		}	
// 	}
// 	return arr2;
// }
// console.log(deleteReapeat(myArr))


//************************************输出正三角形************************************
//function printTriangle(n){
//	for(var i=1;i<=n;i++){
//		for(var j=0,str="";j<i;j++)
//		str+="*";	
//		console.log(str);
//	}	
//}

//字符串的形式会浪费内存，可以改用数组的形式实现
//function printTriangle(n){
//	for(var i=1;i<=n;i++){
//		for(var j=0,arr=[];j<i;j++)
//		arr[arr.length]="*"	
//		console.log(arr.join(""));
//	}	
//}
//printTriangle(6);



//************************************输出反三角形************************************
// function printAnniTriangle(n){
// 	for(var i=1;i<=n;i++){
// 		for(var j=0,str="";j<n;j++){
// 			str+=j<(n-i)?" ":"*";
// 		}
// 		console.log(str);
// 	}
// }
// function printAnniTriangle(n){
// 	for(var i=1;i<=n;i++){
// 		for(var j=0,arr=[];j<n;j++){
// 			arr[arr.length]=j<(n-i)?" ":"*";	
// 		}
//      console.log(arr.join(""));
// 	}
// }
// printAnniTriangle(6);


//************************************输出等腰三角形************************************
// function printEquiTriangle(n){
// 	for(var i=1;i<=n;i++){
// 		for(var j=0,str="";j<(n+i-1);j++){
// 			str+=j<(n-i)?" ":"*";
// 		}
// 		console.log(str);
// 	}
// }

// function printEquiTriangle(n){
// 	for(var i=1;i<=n;i++){
// 		for(var j=0,arr=[];j<n+i-1;j++){
// 			arr[arr.length]=j<(n-i)?" ":"*";
// 		}
// 		console.log(arr.join(""));
// 	}
// }
// printEquiTriangle(6);
// 
// 
