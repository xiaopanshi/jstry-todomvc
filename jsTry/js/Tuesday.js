/*lazyMan思想：
*/
function LazyMan(name) {
	
	var queue = [];
	var api ={
		hi: function() {
			
				
				console.log(`hi! this is ${name}`)
				next()
			
		},
		sleep: function(second) {
			_this = this;
			console.log(1)
			queue.push(function(){
				setTimeout(function() {						//注意不能直接传setTimeout函数
				console.log(`wake up after ${second}`)		
				next();
			}, second * 1000)})
			return this
		},
		eat: function(what) {
			console.log(2)
			queue.push(function() {
				console.log(`eat ${what}~`)
				next();
			})		//给事件队列加事件（同步）
			return this
		},
		sleepFisrt: function(second) {
			_this = this;
			var x = function() {
				setTimeout(function() {
				console.log(`wake up after ${second}`)
				next()
			}, second * 1000)}
			queue.unshift(x)
			return this
		}
	};
	let next = function() {
		let fn = queue.shift();
		fn && fn.call();			//没了就不执行
	}
	queue.push(api.hi);
	setTimeout(function(){
		next();
	},0)
	
	return api
}


// LazyMan("Hack").sleep(10).eat("dinner")
LazyMan("Hack").sleepFisrt(5).eat("dinner")