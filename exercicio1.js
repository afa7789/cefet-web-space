// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let buttonExerciseElArray = document.querySelectorAll('.botao-expandir-retrair')

for ( let  buttonExerciseEl of  buttonExerciseElArray){
	buttonExerciseEl.addEventListener('click',function(e) {
		let button=e.target
		let buttonParentEl = button.parentElement
		let contentButtonExpanded = "-"
		let contentButtonMinimized = "+"
			
		if( buttonParentEl.classList.contains("expandido")){
			buttonParentEl.classList.remove("expandido")
			button.innerHTML = contentButtonExpanded	
		}else{
			buttonParentEl.classList.add("expandido")
			button.innerHTML=contentButtonMinimized	
		}
	});
}
