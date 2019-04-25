// Faça o exercício da galeria de imagens aqui
// Este arquivo está incluído no arquivo HTML
'use strict';

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

const buttonsNavigateEl = document.querySelectorAll(".controle")

for (let b of buttonsNavigateEl){
	b.addEventListener('click',function(e){
		let butaoClicado=e.target
		let div=butaoClicado.parentElement	
		let Galeria= div.querySelector("#slide")
		let TVI = todasAsImagens.length //tamanhoVetorImagem
		let i = 0
		//i=(i+1)%todasAsImagens.length
		for( let imagem of todasAsImagens){		
			if(Galeria.src === imagem){
				if(butaoClicado.id == "antecessor"){
					Galeria.src=todasAsImagens[((i-1)+TVI)%TVI]
				}
				else{
					Galeria.src=todasAsImagens[(i+1)%TVI]
				}
			}
			i++
		}	
	});
}



