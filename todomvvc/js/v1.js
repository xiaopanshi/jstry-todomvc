// (function (window) {
// 	'use strict';

// 	// Your starting point. Enjoy the ride!

// })(window);
$('.new-todo').on('keydown',(e)=>{
	if(e.keyCode == 13) {
		let tp1 = `
			<li>
						<div class="view">
							<input class="toggle" type="checkbox" checked>
							<label>${e.target.value}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
		`
		$('.todo-list').append(tp1)
		e.target.value = '';
	}
})