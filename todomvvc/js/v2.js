let data = {
	lists: [{
		name: 'vue'
	}]
}

$('.new-todo').on('keydown',(e)=>{
	if(e.keyCode == 13) {
		data.lists.push({
			name: e.target.value
		})
		
		e.target.value = '';
		render()
	}

})

$('.todo-list').on('click','.destroy', (e) => {
	let index = $('.destroy').index($(e.target))
	data.lists.splice(index,1)
	render()
})

function render(){
	let todolist = $('#todo-list').html()
	let listTp1 = Mustache.render(todolist,data)
	$('.todo-list').html(listTp1)

	if(data.lists.length){
		$('.footer').show()
	}else {
		$('.footer').hide()
	}
}

render()