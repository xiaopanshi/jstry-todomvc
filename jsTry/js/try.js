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

// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };

// function SubType() {
//     this.subproperty = false;
// }

// //继承了SuperType
// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };

// var instance = new SubType();
// // instance.prototype = {a:3333}
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
// };
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
// 
// 建议] for in 遍历对象时, 使用 hasOwnProperty 过滤掉原型中的属性。
//示例：
//
// var newInfo = {};
// for (var key in info) {
//     if (info.hasOwnProperty(key)) {
//         newInfo[key] = info[key];
//     }
// }
// 

// var color = "green";
// var test4399 = {
// 	color:'blue',
// 	getColor: function(){
// 		var color = "red";
// 		alert(this.color);
// 	}
// }
// var getColor = test4399.getColor;
// getColor();
// test4399.getColor();

//传值
// var a = 3;
// b = a;
// a = 4;
// var x = {
// 	c: 3
// }
// d = x;
// x.c = 4;

//引用类型
// var store1=['Nike China']; 
// var store2=store1; 
// alert(store2[0]); //Nike China 
// store1[0]='Nike U.S.A.'; 
// alert(store2[0]); //Nike U.S.A. 
// 

//远景二面笔试
// function add(arr) {
// 	var num1 = [];
// 	var num2 = [];
// 	var num = arr.split("+");	//分割+号字符串
// 	num1 = num[0].split("->").join("");		//去掉列表合并字符串，左边数字
// 	num2 = num[1].split("->").join("");		//去掉列表合并字符串，右边数字
// 	addNum = +num1+ +num2;			//字符串转为num相加
// 	return String(addNum).split('').join('->')		//转成链表
// }

// var arr = "6->1->7+2->9->5";
// console.log(add(arr))
// 
// 

// setTimeout(function(){
// 	console.log(1);
// },100)
// setTimeout(function(){
// 	console.log(2);
// },0)
// 

// var s = "11010";
// var s = "11111010";
// function stringRang(string) {
// 	var zeroOneNum = [];
// 	var strMaxLength = [];
// 	var sLength;
// 	var as = 0;
// 	if(!string){
// 		return sLength = 0; 
// 	}
// 	else{
// 		sLength = 1;
// 	}
// 	var zeroOneStr = string.split("");
// 	// for (var j=0;j<=string.length;j++){
// 		for (var i in zeroOneStr){
// 			as = +i-1;
// 			if (zeroOneStr[i]!==zeroOneStr[as]) {
// 				zeroOneNum[i] = 1;

// 				// continue
// 			}
// 			else{
// 				zeroOneNum[i] = 0;
// 			}
// 		}
// 		str = zeroOneNum.join('').split('0');
// 		 for (var j = 0; j < str.length; j++) { // arr.length = 6
//         // 将数组arr中每个元素的长度length放到一个新数组arrNum中
//         // strMaxLength.push(String(str[j]).length);
//         strMaxLength.push(str[j].length);
//     }
// 	return sLength = Math.max.apply(null, strMaxLength)+1;	//null 默认为上下文
// }
// console.log(stringRang(s));
// 
// 


// //各种排序算法
// var myArray = [3, 44, 15, 2, 26, 15, 16, 27, 45, 38, 50, 19];
// // // 冒泡排序
// function bubbleSort(myArray) {
// 	var len = myArray.length;
// 	var i;
// 	var j;
// 	var stop;
// 	for (i = 0;i < len-1; i++){
// 		for (j = 0,stop = len-1-i;j < stop; j++){
// 			if (myArray[j] > myArray[j+1]){
// 				swap(myArray, j, j+1);
// 			}
// 		}
// 	}
// 	return myArray;
// }

// function swap(myArray, p1,  p2){
// 	var temp = myArray[p1];
// 	myArray[p1] = myArray[p2];
// 	myArray[p2] = temp;
// }

// bubbleSort(myArray);

// //选择排序
// function selectionSort(myArray) {
// 	var len = myArray.length;
// 	var min,i,j;
// 	for ( i = 0; i < len; i++) {
// 		// 将当前位置设为最小
// 		min = i;

// 		//检查部分数组是否更小
// 		for ( j = i+1; j <len; j++) {
// 			if (myArray[j] < myArray[min]) {
// 				min = j;
// 			}
// 		}

// 		//如果当前位置不是最小值， 将其换为最小值
// 		if (i!=min) {
// 			swap(myArray, i, min);
// 		}
// 	}
// 	return myArray;
// }

// selectionSort(myArray);

// //插入排序
// function insertSort(myArray) {
// 	var len = myArray.length;
// 	var value,i ,j;

// 	for (i = 0; i < len; i++) {
// 		value = myArray[i];

// 		for (j = i-1 ; j >= 0 && myArray[j] > value; j--) { //循环条件添加比大小是为了得出此时的j，直接跳出
			
// 				myArray[j+1] = myArray[j];
			
// 		}
// 		myArray[j+1] = value;
// 	}
// 	return myArray;
// }

// console.log(insertSort(myArray))

// //归并排序
// function merge(left, right) {
// 	var result = [],
// 		left_index = 0,
// 		right_index = 0;

// 	//将两个数组合并
// 	//合并的时候按从小到大的顺序
// 	while ((left_index < left.length) && (right_index < right.length)){
// 		if (left[left_index] < right[right_index]) {
// 			result.push(left[left_index++]);
// 		}else {
// 			result.push(right[right_index++]);
// 		}
// 	}

// 	// 和其他数组合并
// 	return result.concat(left.slice(left_index)).concat(right.slice(right_index))
// }

// function mergeSort(myArray) {
// 	//只有一个数的时候退出递归
// 	if (myArray.length < 2) {
// 		return myArray;
// 	}

// 	var middle = Math.floor(myArray.length/2),
// 		left = myArray.slice(0, middle),
// 		right = myArray.slice(middle);

// 		//递归
// 		//不断拆分直到一个数组只有一个数
// 		return merge(mergeSort(left), mergeSort(right))
// }

// console.log(mergeSort(myArray))


// //快速排序
// var quickSort = function(myArray) {
// 	//当被分的数组只剩一个时，退出递归
// 	if (myArray.length <= 1) {
// 		return myArray;
// 	}

// 	// 中间基准值的index
// 	var pivotIndex = Math.floor(myArray.length/2);

// 	//基准值
// 	var pivot = myArray.splice(pivotIndex,1)[0];
// 	var left = [];
// 	var right = [];
// 	// 小的放左边，大的放右边
// 	for (var i = 0; i < myArray.length; i++) {
// 		if (myArray[i] < pivot){
// 			left.push(myArray[i]);
// 		}else{
// 			right.push(myArray[i]);
// 		}
// 	}

// 	//递归
// 	//把数组合并在一起
// 	return quickSort(left).concat([pivot], quickSort(right))
// };

// console.log(quickSort(myArray))
// 
// var quickSort = function(myArray, head, tail) {
// 	if (head > tail) {
//       return;
//     }
  
//     //i,j指向头和尾巴
//     var i=head;
//     var j=tail;
//     var iPivot=myArray[i]; /**< 选取枢轴 */
  
//     while (i<j) {
//         //使用j,从序列最右端开始扫描,直到遇到比枢轴小的数
//         while ((i<j) && (iPivot < myArray[j])) {
//           j--;
//         }
//         //交换位置
//         if (i<j) {
//           myArray[i++]=myArray[j];
//         }
  
//         //使用i,从序列最左端开始扫描,直到遇到比枢轴小的数枢轴大的数
//         while ( (i<j) && (myArray[i] < iPivot) ) {
//           i++;
//         }
//         //交换位置
//         if (i<j) {
//           myArray[j--]=myArray[i];
//         }
//     }
  
//     //最后填入枢轴位置
//     myArray[i]=iPivot;
//     //这里就是对枢轴两边序列进行排序的递归调用
//     quickSort(myArray, head, i-1);
//     quickSort(myArray, i+1, tail);
//     return myArray
// }
// console.log(quickSort(myArray, 0, myArray.length-1))


//堆排序
// var len;    //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

// function buildMaxHeap(arr) {   //建立大顶堆
//     len = arr.length;
//     for (var i = Math.floor(len/2); i >= 0; i--) {
//         heapify(arr, i);
//     }
// }

// function heapify(arr, i) {     //堆调整
//     var left = 2 * i + 1,
//         right = 2 * i + 2,
//         largest = i;

//     if (left < len && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if (right < len && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     if (largest != i) {
//         swap(arr, i, largest);
//         heapify(arr, largest);
//     }
// }

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function heapSort(arr) {
//     buildMaxHeap(arr);

//     for (var i = arr.length-1; i > 0; i--) {
//         swap(arr, 0, i);
//         len--;
//         heapify(arr, 0);
//     }
//     return arr;
// }

// console.log(heapSort(myArray));


// // 递归去重
// function removeWithoutCopy(arr, item) {
// 	var len = arr.length;
//     for(var i=0;i<len;i++) {
//         if(arr[i]==item) {
//             arr.splice(i,1)
//             removeWithoutCopy(arr,item) //i--
//         }
//     }
//     return arr
// }

// removeWithoutCopy([1,2,3,4,4,5],4)

// function truncate(arr) {
// 	var len = arr.length;
//     var newArr = [];
//     for(var i=0;i<len;i++){
//         if (i==len-1){
//             return newArr
//         }
//         newArr.push(arr[i]);
//     }
// }

// truncate([1, 2, 3, 4])
// 
// 数组去重(返回重复的)
// function duplicates(arr) {
// 	var len = arr.length;
//     var newArr = [],a;

//     for(var i=0;i<len;i++){
//     	   a = 0;
//         for(var j=0;j<newArr.length;j++){
//             if(arr[i]==newArr[j]){
//                 a = 1;
//                 break;
//             }
//         }
//         if(a==0){	
// 	        newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }

// duplicates([1,2,3,3,4,5,6,3,1])

// function duplicates(arr) {
//  var result = [];
//     arr.forEach(function(elem){
//        if(arr.indexOf(elem) !=arr.lastIndexOf(elem) && result.indexOf(elem) == -1){
//            result.push(elem);
//        } 
//     });
//     return result;
// }
// 
// 数组去重（包括对象和NaN）
// Array.prototype.uniq = function () {
//    var resArr = [];
//    var flag = true;
//      
//    for(var i=0;i<this.length;i++){
//        if(resArr.indexOf(this[i]) == -1){
//            if(this[i] != this[i]){   //排除 NaN
//               if(flag){
//                    resArr.push(this[i]);
//                    flag = false;
//               }
//            }else{
//                 resArr.push(this[i]);
//            }
//        }
//    }
//     return resArr;
// }

// Array.prototype.uniq = function () {
// 	var arr = [];
//     for(var i=0,len=this.length; i<len;i++){
//         arr.push(this[i])
//     }
//     var result = [];
// 	var a = 0;
//     arr.forEach(function(elem){
//        if(arr.indexOf(elem) ==arr.lastIndexOf(elem) || result.indexOf(elem) == -1){  //用indexOf方法找对象都是返回-1，||前的东西可以去掉
// 			//isNaN() 函数用于检查其参数是否是非数字值。
// 			//如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。
// 			//注意：在迭代器中对象是相等的，但新创建的空对象不相等，比较要比较对象内的元素，不能整个比较
// 			if(elem!=elem) {

// 				if( a==0) {
// 					result.push(elem);
// 					a=1;
// 				}

// 			}else{
// 				result.push(elem);
// 			}
// 		}
//     });
//     return result;
// }

// console.log(Array.prototype.uniq.call([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]))


// function functions(flag) {
//     if (flag) {
//       function getValue() { return 'a'; }
//     } else {
//       function getValue() { return 'b'; }
//     }

//     return getValue();
// }
// functions(true)
// 
// function sum(string){
// 	var arr = string.split(" ");
// 	var len = arr.length;
// 	var midNum = +arr[0]+ +arr[1]+ +arr[2];;
// 	for(var i=1;i<len-2;i++){
// 		if((+arr[i]+ +arr[i+1]+ +arr[i+2])>midNum){
// 			midNum=+arr[i]+ +arr[i+1]+ +arr[i+2];
// 		}
// 	}
// 	return midNum
// }

// sum('-23 17 -7 11 -2 1 -34')
// 

// rgb转换
// function colorRGB2Hex(color) {
//     var rgb = color.split(',');
//     var r = parseInt(rgb[0].split('(')[1]);
//     var g = parseInt(rgb[1]);
//     var b = parseInt(rgb[2].split(')')[0]);
//     function toStr(color) {
//     	if (color == 0){
//     		return '00'
//     	}else{
    		
//     	return  parseInt(color, 16) < 0x10 ? 
//  					'0' + color.toString(16):
//  					color.toString(16);
//     	}
//     }
//  	var hex = '#'+toStr(r)+toStr(g)+toStr(b);
//     var reg = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
//     if(reg.test(hex)&&(/^rgb/g).test(color)){

// 	    return hex;
//     }else{
//     	return color;
//     }
//  }

//  console.log(rgb2hex('rgb(255 , 20,  255)'))

// function rgb2hex(sRGB) {
//    return sRGB.replace(/^rgb\((\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)\)$/g, function(a, r, g, b){
//        return '#' + hex(r) + hex(g) + hex(b);
//    });
// }
// function hex(n){
//     return n < 16 ? '0' + (+n).toString(16) : (+n).toString(16);
// }
//  
//  
//  计时
// function count(start, end) {
// 	var outtime;
//     var doIt = function() {
//     	console.log(start++)
//     	if (start<=end){
//     		outtime = setTimeout(doIt,100)
//     	}
//     };
//     doIt()
//     o={
//         cancel: function() {
//         outtime && clearTimeout(outtime);
//       }
//     };
// 	return o
// }

// count(3,100000)
// 

// function count(start, end) {
//   //立即输出第一个值
//   console.log(start++);
//      var timer = setInterval(function(){
//          if(start <= end){
//              console.log(start++);
//          }else{
//              clearInterval(timer);
//          }
//      },100);
//     //返回一个对象
//      return {
//          cancel : function(){
//              clearInterval(timer);
//          }
//      };
//  }
//  
//  
//流程控制
// function fizzBuzz(num) {
// 	if(num == null || isNaN(num)){
// 		return false
// 	}
// 	else if(!(num%3||num%5)){
// 		return 'fizzBuzz'
// 	}
// 	else if (!(num%3)) {
// 		return 'fizz'
// 	}else if(!(num%5)){
// 		return 'Buzz'
// 	}
// 	else{
// 		return num
// 	}
// }

// fizzBuzz(undefined)
// 
//exports.functionsAnswers = {
// argsAsArray: function(fn, arr) {
//   return fn.apply(null, arr);
// },

// speak: function(fn, obj) {
//   return fn.call(obj);
// },

// var functionFunction= function(str) {
//   return function(arg) {
//     return str + ', ' + arg;
//   };
// }
// functionFunction('hallo')
// 
//使用闭包
// function makeClosures(arr, fn) {
// 	var ret = [];
// 	var makeFn = function(val) {
// 		// return function() {
// 			return fn(val);
// 		// };
// 	};
// 	for(var i = 0;i<arr.length;i++){
// 		ret.push(makeFn(arr[i]));
// 	}
// 	return ret;          //数组也可以存储函数变量（函数本质是一个变量），加（）可以立即执行函数
// }

// console.log(makeClosures([1, 2, 3],function(x){return x*x}))
// 
// 二次封装
// function partial(fn, str1, str2) {

//     var result = function(str3) {
//     	// return function() {			//返回的是函数变量
//     		return fn(str1,str2,str3)
//     	// }
//     }
//     return result;
// }
// var sayIt = function(greeting, name, punctuation) {
//      return greeting + ', ' + name + (punctuation || '!'); 
// };

// console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));

//接受多个参数
// function useArguments() {
// 	var sum = 0;
//     for(var i = 0; i<arguments.length;i++){
//         sum = sum + arguments[i];
//     }
//     return sum
// }

// useArguments(1,2,3,4)

//arguments不是Array实例，没有slice方法，需要call调用。调用函数用apply（）。call第二个参数后面可以是任意参数，apply只能是数组
// function callIt(fn) {
// 	var args = Array.prototype.slice.call(arguments,1,arguments.length);
    
// 	return fn.apply(null,args);
// }

//调用多个参数，arguments拼接
// function partialUsingArguments(fn) {
//     var args = Array.prototype.slice.call(arguments,1)
// 	var result = function() {
//         var args1 = args.concat.call(arguments,args);
//         return fn.apply(null, args1)
//     }
    
//     return result
// }

// partialUsingArguments(function(){return 3})

//函数curry
// function curryIt(fn) {
// 	var afn = function(a) {
// 		return function(b) {
// 			return function(c){
// 				return fn(a,b,c);
// 			}
// 		}
// 	};
// }

//   curryIt: function(fn) {
//     function applyArguments(_fn, args) {
//       return _fn.apply(null, args);
//     }

//     function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
//       return function (currentArgument) {
//         accumulatedArguments.push(currentArgument);

//         var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

//         if (allArgumentsProvided) {
//           return applyArguments(fn, accumulatedArguments);
//         }

//         return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
//       };
//     }

//     return getArgumentAccumulator([], fn.length);
//   }
// };


// function valueAtBit(num, bit) {
//   var str = num.toString(2);
//     var arr = str.split('').reverse();
//     return +arr[bit-1];
// }

// console.log(valueAtBit(128,8))

// function base10(str) {
// 	return parseInt(str, 2);
// }

// console.log(base10('10000'))

//转化进制并补位
// function convertToBinary(num) {
// 	var str = num.toString(2);
// 	var arr = [];
// 	if(str.length<8) {
// 		for(var i = 0;i< 8-str.length;i++){
// 			arr.push('0')
// 		}
// 	}
// 	arr.push(str)
// 	var str1 = arr.join('');
// 	return str1
// }

// convertToBinary(65)
 
//原型
// function alterObjects(constructor, greeting) {
//     if(typeof constructor != 'function') throw('alterObjects():arguments error, should be function');
//     constructor.prototype.greeting = greeting;
// }
// var C = function(name) {this.name = name; return this;}; 
// var obj1 = new C('Rebecca'); 
// alterObjects(C, 'What\'s up');
// console.log(obj1.greeting)

//遍历实例属性
// function iterate(obj) {
// 	var arr = [];
//     for(var x in obj){
//         if(obj.hasOwnProperty(x)){
//         	name = x + ": " + obj[x];
//             arr.push(name)
//         }
//     }
//     return arr
// }

// var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
// C.prototype.bop = 'bip'; 
// iterate(new C());

//检查数
// function containsNumber(str) {
// 	for (var i = 0;i < str.length ; i++){
//         if(!isNaN(str[i])) {
//            return true
//            }
//     }
//            return false
// }

// console.log(containsNumber('abc12354'))

//检查重复字符串
// function containsRepeatingLetter(str) {
//     if(!/[^a-zA-Z]/.test(str)){
// 		for(var i=0; i <str.length-1;i++){
// 	        if(str[i]===str[i+1]) {
// 	            return true
// 	        }
// 	    }
//     }
//     return false
// }
// function containsRepeatingLetter(str) {
//      return /([a-zA-Z])\1/.test(str);
//  }
// console.log(containsRepeatingLetter('abccce'))
// 
// 
// 查找连续三个数字
// function captureThreeNumbers(str) {
//     var b = /[0-9]{3}/;
//     var arr = [];
//     if(b.test(str)){
//         arr = str.match(b);
//         return arr[0]
//     }
//     return false
// }

// console.log(captureThreeNumbers('aa322aa445'))
// 
// 格式匹配
// function matchesPattern(str) {
//     var b = /^\d{3}\-\d{3}\-\d{4}$/;
//     return b.test(str)
// }

// console.log(matchesPattern('a800-555-1212a'))
// 
// oj系统js格式
// function func(n) {
// 	var i = 0,
// 		k = 2,
// 		j = 2;
// 	while(k < n) {
// 		i = i + 2;
// 		j = j + 1;
// 		k = k + j;
// 	}

// 	return n - i;
// }

// var line;
// while(line = read_line()){
//     line = line.split(' ');
//     print(func(+line[0]));
// }
// var arr = [10,12,17,19,20,21,22,24,25,26,27,28,29,30,32,37,42,43,47,48,50,51,52,56,87,86,81,79,74,71,69,67,66,65,60,59,57,89,91,92,94,96,97,98,99,100];
// var n = 46;
// function func(n, arr) {
// 	var midArr = [];
// 	var leftArr = [];
// 	var	rightArr = [];
// 	var newArr = arr.slice(0);
// 	newArr.sort(function(a,b){return a-b}); //数字排序
// 	for(var i = 0;i<n-1;i++){
// 		if(arr[i]>arr[i+1]){
// 			break;
// 		}
// 	}

	
// 	for(var j=n-1;j>0;j--){
// 		if(arr[j]<arr[j-1])	{
// 			break;
// 		}
			
// 	}
// 	if(i>j|(i==0&&j==n-1)){
// 		return "yes"
// 	}
// 	leftArr = arr.slice(0,i)
// 	midArr = arr.slice(i,j+1);
// 	rightArr = arr.slice(j+1,n)
// 	if(leftArr.concat(midArr.reverse()).concat(rightArr).join() == newArr.join()){
// 		return "yes"
// 	}
// 	// for(var i = 0;i<n-1;i++){
// 	// 	for(var j=n-1;j>0;j--){
// 	// 	if(arr[i]>arr[i+1]&&arr[j]<arr[j-1])	
// 	// 		leftArr = arr.slice(0,i)
// 	// 		midArr = arr.slice(i,j+1);
// 	// 		rightArr = arr.slice(j+1,n)
// 	// 		//不能直接比较数组，转化为字符串
// 	// 		if(leftArr.concat(midArr.reverse()).concat(rightArr).join() == newArr.join()){
// 	// 			return "yes"
// 	// 		}
// 	// 	}
// 	// }
// 	return "no"
	
// }


//赛码系统多行输入。
// var nn, one;
// var aa = [];
// var line;
// while(line= read_line()){
//     line = line.split(' ');
// 	if(line.length == 1){
//     	nn = parseInt(line[0]);
//     }else{
//     	aa = line;
//     	for(one in aa){
//         	aa[one] = parseInt(aa[one]);
//         }
//     }
// }

// print(func(nn, aa));
// function func(n, a){
//     var x = 0;
//     var y = 0; 
//     var b = [];
//     var c = [];
//     if(n == 1 || (n == 2 && a[0] > a[1])){
// 		return "yes";
//     }else{
//         for(var i = 0; i < n-1; i++){
//             if(a[i] > a[i+1] && y == 0){
//                 x++;
//                 y = 1;
//                 i==0 ? b.push(0) : b.push(a[i-1]);
//                 b.push(a[i]);
//             }
//             else if(a[i] < a[i+1] && y == 1){
//                 y = 0;
//                 c.push(a[i]);
//                 c.push(a[i+1]);
//             }
//         }

//         if((x == 1 && b[0] < c[0] && b[1] < c[1]) || x == 0){
//             return "yes";
//         }else{
//             return "no";
//         }
//     }
// }
// console.log(func(n,arr))
// 
// 台阶
// var stair = function(num){

// 	if(num === 0){
// 		return 0;
// 	}
// 	if(num === 1){
// 		return 1;
// 	}
// 	if(num === 2){
// 		return 2;
// 	}
// 	return stair(num-1)+stair(num-2);
// };


// //var line;
// //var data;
// // while(line = read_line()){
// // 	data.push(line);
// // }

// for(var i=1; i<data.length; i++){
// 	print(stair(data[i]-1));
// }
// var data = [3, 4, 7, 8];

// function bindThis(f, oTarget) {
//     return function(){
//         f.apply(oTarget, arguments);
//     }
// }

// var obj = {};
// console.log(bindThis(function(something){this.a = something}, obj)(a))
// 
// 

//分离查询参数
// function getUrlParam(sUrl, sKey) {
//     var param = sUrl.split('#')[0].split('?')[1];
//     if (sKey){//指定参数名称
//         var strs = param.split('&');
//         var arrs = new Array();//如果存在多个同名参数，则返回数组
//         for(var i = 0, len = strs.length; i < len; i++){
//             var tmp = strs[i].split('=');
//             if(tmp[0] == sKey){
//                 arrs.push(tmp[1]);
//             }
//         }
//         if (arrs.length == 1){//返回该参数的值或者空字符串
//             return arrs[0];
//         } else if (arrs.length == 0){
//             return "";
//         } else {
//             return arrs;
//         }
//     } else {//不指定参数名称，返回全部的参数对象 或者 {}
//         if(param == undefined || param == ""){
//             return {};
//         } else {
//             var strs = param.split('&');
//             var arrObj = new Object();
//             for(var i = 0, len = strs.length; i < len; i++){
//                 var tmp = strs[i].split('=');
//                 if (!(tmp[0] in arrObj)) {
//                     arrObj[tmp[0]] = [];
//                 }
//                 arrObj[tmp[0]].push(tmp[1]);               
//             }
//             return arrObj;
//         }
//     }
// }

// function getUrlParam(sUrl,sKey){
//     var result = {};
//     sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
//         if(result[k] !== void 0){
//             var t = result[k];
//             result[k] = [].concat(t,v);
//         }else{
//             result[k] = v;
//         }
//     });
//     if(sKey === void 0){
//         return result;
//     }else{
//         return result[sKey] || '';
//     }
// }
// console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe"))
// 
// 
// function namespace(oNamespace, sPackage) {
//     var a = sPackage.split('.');
//     var obj = {};
//     var midobj = {};
    
//     for(var i = a.length-1;i>0;i--){

//     	for(var key in oNamespace){
//         	if(!(key == a[i])){
//         		if (i == a.length-1) {
// 		    		obj[a[i]] = {};
// 		    	}else{
// 		    		midobj[a[i]] = obj;		//等于上一个数组
// 					obj =  midobj; 
// 					midobj = {};			//中间对象清零
// 		    	}
//         	}else{
//         		oNamespace[key] = obj;
//         	}
//     	}
    	
//     }
// }

// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')

// //命名空间
// function namespace(oNamespace, sPackage) {
//     var arr = sPackage.split('.');
//     var res = oNamespace;   // 保留对原始对象的引用
//  
//     for(var i = 0, len = arr.length; i < len; i++) {
//         if(arr[i] in oNamespace) {  // 空间名在对象中
//             if(typeof oNamespace[arr[i]] !== "object") {    // 为原始值
//                 oNamespace[arr[i]] = {};    // 将此属性设为空对象           
//             }  
//         } else {    // 空间名不在对象中，建立此空间名属性，赋值为空
//             oNamespace[arr[i]] = {};
//         }
//          
//         oNamespace = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。
//     }
//  
//     return res;
//  
// }

// function namespace(oNamespace, sPackage) {
//    if(sPackage.length <= 0) return;
//     // var arr = sPackage.split('.');
//     var pointer = oNamespace;
//  
//  
//         if(sPackage[0] in oNamespace) {
//             if(typeof oNamespace[sPackage[0]] !== "object") {
//                 oNamespace[sPackage[0]] = {};              
//             }  
//         } else {
//             oNamespace[sPackage[0]] = {};
//         }
//  
//         oNamespace = oNamespace[sPackage[0]];
//  
//         namespace(oNamespace, sPackage.slice(2));
//  
//          
//     return pointer;
//  
// }
// 
// 
// 美团笔试题
// var data = ['5', 'sina', 'qq', 'taobao', 'jd', 'baidu', '3', 'qq', 'baidu','baidu'];
// function a(data){
// 	var unselected = [];
// 	var selected = [];
// 	var len = data.length;
// 	var arr = [];
// 	for(var i=1;i<len;i++){
// 		if(isNaN(+data[i])){
// 			unselected.push(data[i])
// 		}else{
// 			break;
// 		}
// 	}
// 	for(i=i+1;i<len;i++){
// 		selected.push(data[i])
// 	}
// 	var selectedShift = new Set(selected);
// 	var lastSelected = [...selectedShift];
// 	for (var j = 0; j < unselected.length; j++) {
// 		var zhuantai = 0;
// 		for(var k = 0; k<lastSelected.length;k++){
// 			if (unselected[j]==lastSelected[k]) {
// 				zhuantai = 1;
// 			}
// 		}
// 		if(zhuantai==0){
// 			arr.push(unselected[j])
// 		}
// 	}
// 	arr.sort()
// 	return arr
// }
// console.log(a(data))
// 
// 时间格式化
// function formatDate(oDate, sFormation) {

//     var year = oDate.getFullYear(),
//         month = oDate.getMonth()+1,
//         date = oDate.getDate(),
//         hour = oDate.getHours(),
//         minute = oDate.getMinutes(),
//         second = oDate.getSeconds(),
//         day = oDate.getDay(),
//         week = ['日', '一', '二', '三', '四', '五', '六'];
//     return sFormation.replace(/yyyy/, year)
//                     .replace(/yy/, pad(year % 100))
//                     .replace(/MM/, pad(month))
//                     .replace(/M/, month)
//                     .replace(/dd/, pad(date))
//                     .replace(/d/, date)
//                     .replace(/HH/, pad(hour))
//                     .replace(/H/, hour)
//                     .replace(/hh/, pad(hour % 12))
//                     .replace(/h/, hour % 12)
//                     .replace(/mm/, pad(minute))
//                     .replace(/m/, minute)
//                     .replace(/ss/, pad(second))
//                     .replace(/s/, second)
//                     .replace(/w/, week[day]);
// 	}
//  
// 	function pad(n){
//     	return n < 10 ? '0' + +n : n;

// }

// console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'))
// 
// 匹配邮箱
// function isAvailableEmail(sEmail) {
//     var rex = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
//     return rex.test(sEmail);
// }
// 
// 小驼峰法
// function cssStyle2DomStyle(sName) {
	
// 	var newStr,leftStr,rightStr;
// 	for(var i = 0;i<sName.length;i++){
// 		if(sName.charAt(i)=="-"&&i==0){
// 			sName = sName.substring(1)
// 		}else{

// 			if(sName.charAt(i)=="-"&&i!=(sName.length-1)&&sName.charAt(i+1)!="-"){
// 				leftStr = sName.substring(0,i)
// 				rightStr = sName.substring(i+2)
// 				newStr = leftStr+sName[i+1].toUpperCase()+rightStr
// 				sName = newStr
// 			}
// 		}
// 	}
// 	return newStr
// }
// console.log(cssStyle2DomStyle('font-size'))

// function cssStyle2DomStyle(sName) {
//             return sName.replace(/(?!^)\-(\w)(\w*)/g, function(a, b, c){		//(?!^)反向引用
//                 console.log(a);
//                     return b.toUpperCase() + c.toLowerCase();
//                 }).replace(/^\-/, '');
//         }
//   
//         字符串统计      
// function count(str) {
// 	var len = str.length;
//     var obj = {};
//     var key;
//     var arr = [];
//     var num = []
    
//     for(var i = 0;i<len;i++){
//         key = str[i];
//         if(key==" "){
//             continue
//         }else if(arr.indexOf(key)==-1){
//             count = 0
//         	for(var j = 0;j<len;j++){
//             	if(str[j]==str[i]){
//                 	count++
//            	 	}

//         	}
//         	// arr.push(key)
//         	// num.push(count)
//         	obj[key]=count;
//         }
//     }
//     // for(var k = 0,len=arr.length;k<len;k++){
//     // 	obj[arr[k]]=num[k];
//     // }
//     return obj
// }

// console.log(count('h123gadi11'))

//字符串统计
// function count(str) {
//     var obj = {};
//     str.replace(/\S/g,function(s){
//         !obj[s]?obj[s]=1:obj[s]++;
//     })
//     return obj;
// }
// 
// // 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
    return true
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};

function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true