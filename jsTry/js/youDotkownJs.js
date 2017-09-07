
// var count = 0

// function foo () {
//   this.count++
// }
// foo.count = 0

// for (var i = 0; i < 5; i++) {
//   foo()
// }


//硬绑定
// function foo() {
// 	console.log(this.a);
// }

// var obj = {
// 	a:2
// };

// var bar = function() {
// 	foo.call(obj);
// }

// bar(); //2
// setTimeout(bar, 100); //2

// //硬绑定的bat不可能在修改它的this
// bar.call(window); // 2

//典型应用场景
// function foo(something) {
// 	console.log(this.a, something);
// 	return this.a + something;
// }

// var obj = {
// 	a:2
// };

// var bar = function() {
// 	return foo.apply(obj, arguments);
// };

// var b = bar(3); //2 3
// console.log(b); //5


//bind:ES5引擎内置方法，Function.prototype.bind
// function foo(something) {
// 	console.log( this.a, something );
// 	return this.a + something;
// }

// var obj = {
// 	a:2
// };

// var bar = foo.bind( obj );
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5
// 


//api绑定
// function foo(el) {
// 	console.log( el, this.id );
// }

// var obj = {
// 	id: "awesome"
// };

// // 调用 foo(..) 时把 this 绑定到 obj
// [1, 2, 3].forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome

/*******使用new操作符，
1.创建(或者说构建)一个新的对象。
2.新对象执行原型连接。
3.这个新对象会绑定到函数调用的this。
4.new中的函数调用会返回新对象(如果没有return一个对象)
********/





/*
3.3.4复制对象
*/
function anotherFunction() { /*..*/ }
var anotherObject = {
	c: true
};
var anotherArray = [];
var myObject = {
	a: 2,
	b: anotherObject, // 引用， 不是复本！
	c: anotherArray, // 另一个引用！
	d: anotherFunction
};
anotherArray.push( anotherObject, myObject )

var newObj = Object.assign( {}, myObject );
newObj.a; // 2
newObj.b === anotherObject; // true
newObj.c === anotherArray; // true
newObj.d === anotherFunction; // true

/*
3.3.5属性描述符
 */
var myObject = {
	a:2
};
Object.getOwnPropertyDescriptor( myObject, "a" );
// {
// 	value: 2,
// 	writable: true,
// 	enumerable: true,
// 	confgurable: true
// }

/*
3.3.5.1 writable
 */


var myObject = {};
Object.defineProperty( myObject, "a", {
	value: 2,
	writable: false, // 不可写！
	configurable: true,
	enumerable: true
} );
myObject.a = 3;		//严格模式下这行报错
myObject.a; // 2

/*
3.3.5.2 configurable 
注意： 如你所见， 把 configurable 修改成
false 是单向操作， 无法撤销！
除了无法修改， configurable:false 还会禁止删除这个属性
 */
var myObject = {
	a:2
};
myObject.a = 3;
myObject.a; // 3
Object.defineProperty( myObject, "a", {
	value: 4,
	writable: true,
	configurable: false, // 不可配置！
	enumerable: true
} );

myObject.a; // 4
myObject.a = 5;
myObject.a; // 5
Object.defineProperty( myObject, "a", {
	value: 6,
	writable: true,
	configurable: true,
	enumerable: true
} ); // TypeError

