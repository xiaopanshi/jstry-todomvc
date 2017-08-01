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
				<input class="edit" value="${e.target.value}">
			</li>
		`
		$('.todo-list').append(tp1)
		e.target.value = '';
		toggle()
	}
})

$('.todo-list').on('click','.destroy', (e) => {
	$(e.target).closest('li').remove()
	toggle()

})

function toggle(){
	let $footer = $('footer');
	if(!$('.todo-list>li').length){
		$footer.hide()
	}else if($footer.css('display') == 'none'){
		$footer.show()
	}
}